//jshint: esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));// the cody is requiredd to use body-parser
/*Now why would you want to use Body Parser? Well, it allows you to go into any of your routes,
 and you can tap into something called request.body,and this is the parsed version of the HTTP request.*/

app.get("/", function(req, res){
        /*__dirname going to give you the file path of the current file no matter 
        where it's hosted, on somebody else's computer, in the cloud, in a remote server, 
        whatever it may */
        res.sendFile(__dirname + "/index.html");//->/Users/aseel./Desktop/VSCODE html/Calculator + /index.html
       
       
});
app.post("/", function (req, res) {
       var num1 = req.body.num1;
       var num2 = req.body.num2; 

       var result = Number(num1) + Number(num2); //casting string to integer 
        res.send("Result is: "+ result);
})
app.listen(3000, function () {
        console.log("server started on port 3000");
});