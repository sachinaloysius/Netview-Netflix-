const express=require('express')
const app=express()
const mysql=require('mysql2')
const bodyparser=require('body-parser')
const multer=require('multer')
const cors=require('cors')
const port=7556;

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

app.listen(port,()=>{
console.log("Yes its running Bitch!!!");
})

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'db_netview'
})

db.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Database is connected");
})

app.post('/Createuser',(req,res)=>{
    const username=req.body.username
    const useremail=req.body.useremail
    const userpassword=req.body.userpassword
    let qry=`insert into tbl_user(user_name,user_email,user_password) values('${username}','${useremail}','${userpassword}')`
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send({
                message:'True'
            })
        }
    })
})

app.post('/Userlogin',(req,res)=>{
    const email=req.body.email
    const password=req.body.password
    let qry=`select * from tbl_user where user_email='${email}' and user_password='${password}'`
    db.query(qry,(err,result)=>{
        if(err){
            console.log(err);
        }
        else if(result.length>0){
            res.send({
                id:result[0].user_id,
                login:'user'
            })
        }
        else{
            res.end()

        }
    })
})

app.get('/UserDetails',(req,res)=>{
    let qry=`select * from tbl_user`
    db.query(qry,(err,results)=>{
        if(err){
            console.log(err);
        }
        else if(results.length>0){
            res.send({
                user:results
            })
        }
        else{
            res.send({
                user:[]
            })
        }
    })
})