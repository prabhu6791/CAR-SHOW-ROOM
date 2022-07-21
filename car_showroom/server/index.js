const exp = require('express');
const mys = require('mysql');
const app = exp();
const multer = require('multer')
const path = require('path')
// const cors = require("cors");
const bodyParser = require('body-parser');

const cors = require('cors');
const { response } = require('express');
app.use(cors());
app.use(exp.json());

//use express static folder
app.use(cors());
app.use(exp.static("./public"))
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

const c = mys.createConnection({
    host : "localhost",
    user : "root",
    password : "prabhu007",
    database : "project"
});

c.connect(function(err){
    if(err){console.log('error');}
    else{console.log('Data Base Connected');}
});

app.post("/login",(request,response)=>{
    
    const username2 = request.body.username;
    const password2 = request.body.password;
    c.query("select username,password,role from login where username = ?", [username2], function(error,rows){
        if(error){
            const s = {status : 'error'};
            response.send(s);  
        }
        else{
            const username1 = rows[0].username;
            const password1 = rows[0].password;
            const role1 = rows[0].role;
            if(username2 == username1 && password2 == password1){
                if(role1 == '1'){
                    const s = {status : 'pass', role : 'admin'};
                    response.send(s);  
                }
                else if(role1 == '2'){
                    const s = {status : 'pass', role : 'staff'};
                    response.send(s);   
                }
                else if(role1 == '3'){
                    const s = {status : 'pass', role : 'staff2'};
                    response.send(s);   
                }
            }
            else{
                const s = {status : 'error'};
                response.send(s);   
            }
        }
    });
});

app.post('/image_upload', upload.single('imagefile'),
function(req,res){
    const name23 = req.file.originalname;
    // const b = req.body.username;
    const type2="1";
    const path2 = "uploads";

    console.log(name23);
    // console.log(b);

    //add sql query in this section
    c.query("insert into images(img_name,img_path,uploadtype) value(?,?,?)",[name23,path2,type2],
    function(error,result){
        if(error)
            console.log("error");
        else
            response.send(result);
    });
});

//product
app.post("/product",(request,response)=>{
    const models = request.body.models;
    const cylinder = request.body.cylinder;
    const features2 = request.body.features;
    const fuel_type = request.body.fuel_type;
    const transmission = request.body.transmission;
    const color = request.body.color;

    
    c.query("insert into product(models,cylinder,features,fuel_type,transmission,color) value(?,?,?,?,?,?)",[models,cylinder,features2,fuel_type,transmission,color],
    function(error,result){
        if(error)
            console.log("error");
        else
            response.send(result);
    });
})
//product

//fletch product
app.get('/product_fletch', (req,res)=>{
    c.query('select * from product',(err,result,field)=> {
        if (err) throw err;
        // console.log(res);
        res.send(result);
    });
});
app.get('/cus_view', (req,res)=>{
    c.query('select * from customer',(err,result,field)=> {
        if (err) throw err;
        // console.log(res);
        res.send(result);
    });
});
app.get('/supplier_fletch', (req,res)=>{
    c.query('select * from supplier',(err,result,field)=> {
        if (err) throw err;
        // console.log(res);
        res.send(result);
    });
});
app.get('/viewproduct_fletch', (req,res)=>{
    c.query('select * from product',(err,result,field)=> {
        if (err) throw err;
        // console.log(res);
        res.send(result);
    });
});
app.get('/imagefletch', (req,res)=>{
    c.query('select * from images',(err,result,field)=> {
        if (err) throw err;
        // console.log(res);
        res.send(result);
    });
});

//fletch product


//customer table
app.post("/customer",(request,response)=>{
    const cus_id2 = request.body.cus_id;
    const cus_name2 = request.body.cus_name;
    const designation2 = request.body.designation;
    const company_name2 = request.body.company_name;
    const cus_phone2 = request.body.cus_phone;
    const cus_mail2 = request.body.cus_mail;
    const age2 = request.body.age;
    
    c.query("insert into customer(cus_id,cus_name,designation,company_name,phone,mail,age) value(?,?,?,?,?,?,?)",[cus_id2,cus_name2,designation2,company_name2,cus_phone2,cus_mail2,age2],
    function(error,result){
        if(result){
            console.log("Customer Table inserted");}
        else{console.log(error);}    
        });

//customer table
//Login table customer add

    const cus_role="3";
    const password2 = "customer";
    c.query("insert into login(username,password,role) value(?,?,?)", [cus_mail2,password2,cus_role], 
        function(error,result){
                if(result)
                {
                    console.log("Customer Added to Login Table");
                }
    });
});
//Login table customer add

// supplier table 
app.post("/supreg",(request,response)=>{
    const sup_id2 = request.body.sup_id;
    const sup_name2 = request.body.sup_name;
    const sup_branch2 = request.body.sup_branch;
    const sup_phone2 = request.body.sup_phone;
    const sup_mail2 = request.body.sup_mail;
    const sup_website2 = request.body.sup_website;
    const sup_role="1";
    c.query("insert into supplier(sup_id,sup_name,sup_branch,sup_phone,sup_mail,sup_website) value(?,?,?,?,?,?)",[sup_id2,sup_name2,sup_branch2,sup_phone2,sup_mail2,sup_website2],
    function(error,result){
        if(error)
            console.log(error);
        else
            response.send(result);
    });
 
//supplier table
//Login table supplier add

    const password2 = "supplier";
    c.query("insert into login(username,password,role) value(?,?,?)", [sup_mail2,password2,sup_role], 
        function(error,result){
                if(result)
                {
                    console.log("Supplier Added to Login Table");
                }
    });
});
//Login table supplier add

//forgot password

app.post("/reset",(request,response)=>{
    const username33 = request.body.userdata;
    const password33 = request.body.passdata;

    // console.log(username33);
    // console.log(password33);
    
    c.query("update login set password=? where username=?",[password33,username33],
    function(error,result){
        if(error){
            console.log(error);}
        else{console.log("password changed")}    
        })
    });




//forgot password

//Search bar
    // app.get("/search",(request,response)=>{
    //     const gta = request.body.sup_name;
    //     console.log(gta);
    //     c.query("select * from supplier where sup_name=?",[gta],
    //     function(error,result){
    //         if(error){
    //             console.log(error);}
    //         else{
    //             app.get('/search', (req,res)=>{
    //                 const gta = request.body.sup_name;
    //                 c.query('select * from supplier where sup_name=?',[gta],(err,result,field)=> {
    //                     if (error) throw err;
    //                     response.send(result);
    //                 });
    //             });
    //         }    
    //         })
    //     });
                    app.get('/search', (request,res)=>{
                        const gta = request.body.supname;
                        // console.log(gta);
                       c.query('select * from supplier where sup_name=?',[gta],(err,result)=> {
                            if (err) throw err;
                            //  console.log(res);
                             res.send(result);
                         });
                        });


    //profile for customer
    // app.get('/login', (req,res)=>{
    //     const name_cus=req.body.username;
    //     console.log(name_cus);
    //     c.query('select * from customer where mail=?',["manic123@gmail.com"],(err,result,field)=> {
    //         if (err) throw err;
    //         console.log(res);
    //         res.send(result);
    //     });
    // }); 

    
    //profile for customer
app.listen(3001);