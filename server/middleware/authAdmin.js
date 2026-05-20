const jwt = require("jsonwebtoken");

const authAdmin = (req, res, next)=>{
    try{
        const token = req.cookies.adminToken;
        
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Unauthorized"
            });
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.admin = decoded;

        next();
    }catch(err){
        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });
    }
}

module.exports = authAdmin