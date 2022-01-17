const bcrypt = require('bcrypt');
const db=require('../db');
const jwt=require('jsonwebtoken');
/**
 * 신규 회원가입을 요청하여 조건에 성립하면 데이터베이스에 입력한다.
 * @param {*} data : input data
 * @param {*} cb : call back
 */
exports.insertData = (data,cb) => {
    const saltRound=10;
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

/**
 * 로그인 요청시 아이디와 패스워드를 확인한다.
 * @param {*} data : input data
 * @param {*} cb : callback ---> 
 * 0 : no match id in database
 * 1 : compare error
 * 2 : id and password correct
 * 3 : password error
 */
exports.checkUser = (data,cb) => {
    let sql = 'select id,password from user where id=?'
    let bindParam = [
        data.id
    ];
    db.con.query(sql,bindParam,(err,results,fileds)=>{
        const count=results.length;
        if(err){
            console.log("checkUser sql error");
            cb(results);
            throw new Error(err);
        }
        if(count===0){
            console.log("no find id cb err");
            cb(0);
        }
        else{
            bcrypt.compare(data.password,results[0].password,(err,res)=>{
                if(err){
                    console.log("compare err");
                    cb(1);
                    throw new Error(err);
                }
                if(res){
                    console.log("password correct");
                    cb(2);
                }
                else{
                    console.log("password wrong");
                    cb(3);
                }
            });
        }
    })
}

/**
 * 로그인 성공시 토큰을 발행한다.
 * @param {*} data : input data
 * @param {*} cb : token call back
 */
exports.tokenIssue = (data,cb) =>{
    const token = jwt.sign({
        id:data.id
    },'SECRETKEY',{expiresIn:"30d"});
    cb(token);
}
