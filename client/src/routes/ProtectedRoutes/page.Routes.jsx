import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Loader from "../../components/Global/loaders";
import api from "../../utils/api"

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        navigate("/login", { replace: true });
        return;
      }

      try {
        // Make a "test" request to see if token works
        await api.get("/users/me");
      } catch (err) {
        
        // If failed due to expired token, axios interceptor will try refresh
      } finally {
        setChecking(false);
      }
    };

    checkToken();
  }, [navigate]);
  

  if (checking) return <Loader.CheckSession />;

  return children;

};
