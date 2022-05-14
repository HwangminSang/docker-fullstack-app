const express=require('express');
const bodyParser=require('body-parser');


const db= require('./db');

//Express 서버 생성
const app=express();

// json 형태로 오는 요청의 본문을 해설할수있게 등록
app.use(bodyParser.json());


// //테이블 생성
// db.pool.query(`CREATE TABLE lists ( id INTEGER AUTO_INCREMENT , value TEXT, PRIMARY KEY (id))`,
// (err,reulsts,fileds)=>{
//     console.log(results);
// }
// )

//디비의  list 테이블에 있는 모든 데이터를 서버에 보내주기
app.get('/api/values',(req,res)=>{
    //데이터베이스에서 모든 정보가져오기
    db.pool.query('SELECT * FROM lists'),
    (err,results,fileds)=>{
        if(err)
        return res.status(500).send(err);
        else
        return res.json(results);
    }

});

//클라이언트에서 입력한 값을 데이터베이스에 넣어주기 

app.post('/api.value',(req,res,next)=>{
    db.pool.query(`INSERT INTO lists (vlaue) VALUES ("${req.body.value})`) ,
    (err,results,fileds)=>{
        if(err)
        return res.status(500).send(err);
        else
        return res.json({success : true , value : req.body.value})
    }


});


app.listen(5000,()=>{
    console.log('어플리케이션 5000에서 시작')
})
