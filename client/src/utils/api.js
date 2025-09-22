import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true
});


 api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
 })




 api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

        // kugn may mali sa response
        if(error.response && error.response.status === 401 && !originalRequest._retry){
            originalRequest._retry = true;

            try{
  
                const { data } = await api.post("http://localhost:5000/auth/refresh-token",{})
                
                // iset ulit sa local storage ang acess token na genearted ng refresh token
                localStorage.setItem("accessToken",data.accessToken);


                // update header sa original request
                originalRequest.headers["Authorization"] = `Bearer ${data.accessToken}`
                return api(originalRequest);
            
            }catch(err){
                console.error("Refresh Failed,Redirecting To Login");
                window.location.href = "/";
            }

        }
       return Promise.reject(error);

} )


export default api;