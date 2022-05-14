const mysql=require('mysql');
//aws rds에서 mysql 생성할때는 거기서 제공하는 정보를 넣어줘야한다
const pool=mysql.createPool({
    connectionLimit : 10,
    host : 'mysql',
    user : 'root',
    password : '1234',
    database : 'myApp'
})

exports.pool=pool;