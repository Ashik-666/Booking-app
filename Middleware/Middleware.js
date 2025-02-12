const jwt = require('jsonwebtoken')
const secretkey= process.env.BCRYPT_SECRET_KEY

module.exports.VerifyToken = (req,res,next) =>{
    const token = req.headers['authorization']?.split(' ')[1];
    if (token) {
        return res.status (403).send('token is required')
    }
    jwt.verify(token,"mysecretkey",(err,decoded)=>{
        if(err){
            return res.status(401).send('invalid token')
        }
        req.unserId=decoded.Id;
        console.log("tokenverified");
        next() 
    })
}