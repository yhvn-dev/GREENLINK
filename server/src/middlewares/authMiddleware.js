import jwt from "jsonwebtoken"


export const verifyAccessToken = async (req,res, next) =>{
    
 try{

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    console.log("HEADERS: ", req.headers)

    if (!token) return res.sendStatus(401); 

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid or expired access token" });

      req.user = user;
      next();
    });
    
  }catch(err){
    console.log("MIDDLEWARE: ERROR VERIFYING ACCESS TOKEN")
    return res.status(500).json({message: "Internal Server Error"})
  }

}



export const verifyRefreshToken = (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json({ message: "No refresh token found" });
    }

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json({ message: "Invalid or expired refresh token" });
      }

      req.user = user;
      next();

      
    });


  } catch (err) {
    console.error("MIDDLEWARE: Refresh Token Invalid,", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

