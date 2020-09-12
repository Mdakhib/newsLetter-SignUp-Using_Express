const express=require("express")
const bodyParser=require("body-parser")
const request=require("request")

const app=express()
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
});

app.post("/signup.html",(req,res)=>{
    res.send("Thank you for Subcribe")
})

app.listen(3000,()=>{
    console.log("server is running at 3000");
})