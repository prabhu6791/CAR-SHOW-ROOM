const express = require('express')
const app = express()
const mys = require('mysql')
const multer = require('multer')
const path = require('path')
const cors = require("cors");
const bodyParser = require('body-parser');

//use express static folder
app.use(cors());
app.use(express.static("./public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//! Use of Multer
var storage = multer.diskStorage({
    destination: (req, file, callBack) => {
        callBack(null, '../client/public/uploads/')     // './public/images/' directory name where save the file
    },
    filename: (req, file, callBack) => {
        callBack(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})

var upload = multer({
    storage: storage
});

//DB connection
const d = mys.createConnection({
    host : "localhost",
    user : "root",
    password : "prabhu007",
    database : "project"
});

d.connect(function(err){
    if(err){console.log('error');}
    else{console.log('DB connection ok');}
});


//@type   POST
//route for post data
app.post('/image_upload', upload.single('imagefile'),function(req,res){
    const a = req.file.originalname;
    // const b = req.body.username;
    const b="1";
    const c = "uploads";

    console.log(a);
    console.log(b);

    //add sql query in this section
    d.query("insert into images(img_name,img_path,uploadtype) value(?,?,?)",[a,c,b],
    function(error,result){
        if(error)
            console.log(error);
        else
            response.send(result);
    });
});

app.listen(3001)
