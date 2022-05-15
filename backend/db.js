const mysql=require('mysql');
//aws rds에서 mysql 생성할때는 거기서 제공하는 정보를 넣어줘야한다
const pool=mysql.createPool({
    connectionLimit : 10,
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_ROOT_PASSWORD,
    database : process.env.MYSQL_DATABASE,
    port :process.env.MYSQL_PORT
})

exports.pool=pool;