const express = require("express");
const path = require("path")
const app = express();


// app.use(express.static('public'));

app.get('/',function(request , response){
    response.send('YEEEEEE');
});
app.get('/html',function(request , response){
    response.sendFile(path.join(__dirname,'satpopup.html'));

});


 app.listen(8007,function(){
     console.log("sever chalu 150rs lega ");
 });


























/*

npm install express
npm install path
node index.js
localhost:8000


*/