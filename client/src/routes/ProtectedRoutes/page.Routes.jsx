import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import api from "../../utils/api"; // axios instance mo

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {

        
        // Walang token, try refresh
        try {
          const { data } = await api.post("/auth/refresh-token"); // cookie will be sent automatically
          localStorage.setItem("accessToken", data.accessToken);
          console.log("Access token refreshed!")



        } catch (err) {
          console.log("Refresh failed, redirecting to login");
          localStorage.removeItem("accessToken");
          navigate("/login", { replace: true });
        }

        return;
      }

      try {
        const decoded = jwtDecode(token);
        const now = Date.now();
        const expireTime = decoded.exp * 1000;

        console.log("Access token expires at:", new Date(expireTime));

        if (now > expireTime) {
          // Access token expired, try refresh
          try {
            const { data } = await api.post("/auth/refresh-token");
            localStorage.setItem("accessToken", data.accessToken);
            console.log("Access token refreshed!");
          } catch (err) {
            console.log("Refresh failed, redirecting to login");
            localStorage.removeItem("accessToken");
            navigate("/login", { replace: true });
          }
        }
      } catch (err) {

        // Invalid token, logout
        console.log("Invalid access token, redirecting to login");
        localStorage.removeItem("accessToken");
        navigate("/login", { replace: true });
      }
    };



    checkToken();
  }, [navigate]);

  return children;
};
