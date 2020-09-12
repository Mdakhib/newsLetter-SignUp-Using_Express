const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.send("the newsLetter is working")
})

app.listen(3000,()=>{
    console.log("server is running at 3000");
})