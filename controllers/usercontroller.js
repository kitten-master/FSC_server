const User = require('../models/usermodel');

exports.insertUserProcess = (req,res) => {
   let item={
       'id':req.body.id,
       'username':req.body.username,
       'password':req.body.password,
       'email':req.body.email
   };
   User.insertData(item,(result)=>{
       if(result){
           if(result.affectedRows===1){
               res.status(201).send({
                   message:'create ID success!'
               });
           }
           else{
            res.status(409).send({
                message:'signup failed! because duplicate error, use a different ID'
            });
           }
       }
   })
}

exports.loginProcess = (req,res) => {
    let item={
        'id':req.body.id,
        'password':req.body.password
    };
    User.checkUser(item,(result)=>{
        if(result===0){
            res.status(404).send({
                message:'No matching id, please check your id'
            });
        }
        else if(result===1){
            res.stauts(401).send({
                message:'compare server error'
            });
        }
        else if(result===2){
            User.tokenIssue(item,(token)=>{
                res.status(201).send({
                    message:'success',
                    token
                });
            });
        }
        else if(result===3){
            res.status(401).send({
                message:'password error'
            });
        }
        else{
            res.status(401).send({
                message:'Server Error'
            });
        } 
    });
}

exports.userVerifyTokenTest = (req,res) => {
    res.send("success!");
}