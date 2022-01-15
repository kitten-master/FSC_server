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