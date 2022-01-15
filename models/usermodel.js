const bcrypt = require('bcrypt');
const db=require('../db');
const saltRound=10;
/**
 * 신규 회원가입을 요청하여 조건에 성립하면 데이터베이스에 입력한다.
 * 
 * data : input data received from the controller
 * cb : callback function 
 * */  

exports.insertData = (data,cb) => {
    bcrypt.genSalt(saltRound,(err,salt)=>{
        if(err) throw new Error(err);
        bcrypt.hash(data.password,salt,(err,hash)=>{
            if(err) throw new Error(err);
            let sql = 'insert into user(id,password,email,username) values(?,?,?,?)';
            let bindParam = [
                data.id,
                hash,
                data.email,
                data.username,
            ];
            db.con.query(sql,bindParam,(err,results,fields)=>{
                if(err){
                    cb(err);
                    throw new Error(err);
                }
                else{
                    cb(JSON.parse(JSON.stringify(results)));
                }
            });
        });
    });
};
