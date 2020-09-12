const express=require("express")
const bodyParser=require("body-parser")
const request=require("request")
const https=require("https")
const app=express()

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/signup.html")
});

app.post("/",(req,res)=>{
    const firstName=req.body.fName;
    const lastName=req.body.lName;
    const email=req.body.email;
    
    var data={
        members:[
            {
                email_address:email,
                status:"subscribed",
                merge_fields:{
                    FNAME:firstName,
                    LNAME:lastName
                }
            }
        ]
    };
    var jsonData=JSON.stringify(data);
const url="https://us2.api.mailchimp.com/3.0/lists/8509e218f0";
const options={
    method:"POST",
    auth:"Mdakhib903642:bd240753aaa22b8c2ddc71e98035e473-us2"
}

const request= https.request(url,options,function(response){
    if (response.statusCode==200){
        res.sendFile(__dirname+"/success.html")
    }
    else{
        res.sendFile(__dirname+"/failure.html")
    }
    response.on("data",function(data){
        console.log(JSON.parse(data));
     })
})
request.write(jsonData)
request.end();
});

app.post("/failure",(req,res)=>{
    res.redirect("/")
});

app.listen(3000,()=>{
    console.log("server is running at 3000");
})
// bd240753aaa22b8c2ddc71e98035e473-us2

// 8509e218f0