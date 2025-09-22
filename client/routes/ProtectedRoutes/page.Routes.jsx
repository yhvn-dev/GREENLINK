import { jwtDecode } from "jwt-decode"; 
import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({children}) =>{

    const token = localStorage.getItem("accessToken");
    if(!token) return <Navigate to="/login" replace/>

    let decoded;

    try{
        decoded = jwtDecode(token);
    }catch(err){
        localStorage.removeItem("accessToken")
        return <Navigate to="/login" replace/>
    }

    const now = Date.now() / 1000

    if(decoded.exp < now){
       localStorage.removeItem("accessToken")
       return <Navigate to="/login" replace/>
    }

    return children
}