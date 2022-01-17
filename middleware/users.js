const jwt= require('jsonwebtoken');

module.exports = {
    validateRegister: (req, res, next) => {
        //username min length 3 max length 15
        //password min 6chars
        if(!req.body.id || req.body.id.length < 3 || req.body.id.length>15){
            return res.status(400).send({
                message: "input your id or 3~15 write id",
            });
        }
        if(!req.body.username || req.body.username.length < 3 || req.body.username.length>15){
            return res.status(400).send({
                message: "input your username or 3~15 write username",
            });
        }
        if(!req.body.password || req.body.password.length < 6){
            return res.status(400).send({
                message: "input your password or 6upper write password",
            });
        }
        if(!req.body.email || req.body.email.length < 1){
            return res.status(400).send({
                message : "input your email or 1upper email",
            });
        }
        next();
    },

    verifyToken : (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(" ")[1];
        if(token){
            jwt.verify(token,'SECRETKEY',(error,user)=>{
                if(error){
                    return res.status(401).send({
                        message : "token is not Invalid"
                    });
                }
                req.user=user;
                next();
            });
             
        }
        else{
            res.status(401).send({
                message:'no have token'
            });
        }
    }
    
}