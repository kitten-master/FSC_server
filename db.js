const mysql = require('mysql');

const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'slrlal1!',
    port:3306,
    database:'psc',
    multipleStatements: true
});

con.connect((err) => {
    if (err) throw err;
    else console.log("connection success!!");
})

module.exports = {
    con
}