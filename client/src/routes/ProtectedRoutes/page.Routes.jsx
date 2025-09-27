import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Loader from "../../components/Global/loaders";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      navigate("/login", { replace: true });
    }
    setChecking(false);
  }, [navigate]);

  if (checking) return <Loader.CheckSession />;

  return children;

};
