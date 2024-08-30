let express = require("express")
let app = express();


// dotEnv File
require("dotenv").config();


const port = process.env.PORT;


app.get("/" , (req , res, next)=>{
    res.send("Hello World");
})

app.get("/twitter", function(req , res, next){
    // res.redirect("/")
    res.send("twitter")
})


app.get("/login", (req, res)=>{
    res.send("<h1>Please Login Code</h1>")
})




app.listen(port , function(){
   console.log(`http://localhost:${port}`)
});