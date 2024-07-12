const port=5000;
import express from 'express'
const app=express();
import { mongoose } from 'mongoose';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import cors from 'cors'
import data from './Data/data.js'
import { title } from 'process';
import { url } from 'inspector';
app.use(express.json());
app.use(cors());

// Database Connection With Mongodb
// mongoose.connect("mongodb+srv://vsinghmandhotra005:vikram005@cluster0.vozrnls.mongodb.net/Ecommerce1")

mongoose.connect("mongodb://localhost:27017")

// Api Creation

app.get("/",(req,res)=>{
    res.send("ExpressAppis")
})

//Image Storage Engine

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({storage:storage})

//creating uplode Endpoint for images

app.use('/images',express.static('upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        Image_url:`http://localhost:${port}/images/${req.file.filename}`,
        Image_url2:`http://localhost:${port}/images/${req.file.filename}`,

    })
})


//  schema for creating products
const Product=mongoose.model("MyntraProduct",{
    id:{
     type:Number,
     required:true,
     unique:true,
},
web:{
    type:String,
    required:true,
    },
url:{
    type:String,
    required:true,
},
url2:{
  type:String,
  required:true,
},
title:{
    type:String,
    required:true,
},
productCompany:{
  type:String,
  required:true,
},
category:{
type:String,
required:true,
},
category2:{
type:String,
required:true,
},
mrp:{
    type:Number,
    required:true,
},
price:{
    type:Number,
    required:true,
},
discount:{
  type:String,
  required:true,
},
date:{
    type:Date,
  default:Date.now,
},
avilable:{
    type:Boolean,
    default:true,
},

})

const Default= async()=>{
try{
  await Product.insertMany(data)
  console.log("data imported ")
l
}catch(error){
  console.log('Error while inserting default data',error.message)
}

}

Default()


app.post('/addproduct',async (req,res)=>{
let products = await Product.find({});
let id;
if(products.length>0)
{
    let last_product_array=products.slice(-1);
    let last_product= last_product_array[0];
    id=last_product.id+1;
}
else{
    id=1;

}
const product = new Product({
    id:id,
    title:req.body.title,
   url:req.body.url,
   url2:req.body.url2,
   productCompany:req.body.productCompany,
   mrp:req.body.mrp,
   price:req.body.price,
   category:req.body.category,
   category2:req.body.category2,
   web:req.body.web,
   discount:req.body.discount,


});
console.log(product);
await product.save();
console.log("saved")
res.json({
success:true,
title:req.body.title,
})
})


// creating API For deleting Products

app.post('/removeproduct',async (req,res)=>{
await Product.findOneAndDelete({id:req.body.id});
console.log("Removed");
res.json({
    success:true,
    title:req.body.title
})

})

// creating API for getting all products

app.get('/allproduct',async(req,res)=>{
let products= await Product.find({});
console.log("All product fetched");
res.send(products);                           
})

// Shema creating for user model

const Users = mongoose.model('MyntraUsers',{
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    username:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    mobilenumber:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    orderData:{
        type:Object,
    },

    date:{
        type:Date,
        default:Date.now,
    }


}) 

// Creating endpoint for registertion the user
app.post('/signup',async(req,res)=>{

    let check = await Users.findOne({email:req.body.email});
    if (check){
        return res.status(400).json({success:false,errors:"exiting user found with same email address "})
    }
    let cart = {}
    for (let i=0; i<300; i++){
        cart[i]=0;
    }
    const user= new Users({
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        username:req.body.username,
        email:req.body.email,
        mobilenumber:req.body.mobilenumber,
        password:req.body.password,
        cartData:cart,
        orderData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

// Crerating endpoint for user login
app.post('/login',async (req,res)=>{
    let user = await Users.findOne({mobilenumber:req.body.mobilenumber});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token});
        }
        else{
            res.json({success:false,errors:"Wrong Password"})
        } 
    }
    else {
        res.json({success:false,errors:"Wrong Number"})
    }
})





// creating middelware to fatch user  <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const fetchUser= async(req,res,next)=>{
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch(error){

            res.status(401),send({errors:"Please authenticate using a valid token"})

        }
    }
}





// creating endpoint.......add product in cart

app.post('/addtocart',fetchUser,async (req,res)=>{
    console.log("Added",req.body.itemId);
   let userData = await Users.findOne({_id:req.user.id});
   userData.cartData[req.body.itemId] +=1;
   await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
   res.send("added")

})

// creating endpoint to  remove ...<<<<

app.post('/removefromcart',fetchUser,async (req,res)=>{
    console.log("Removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if( userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")

})

// creating endpoint to get cartdata
app.post('/getcart',fetchUser,async (req,res)=>{
     console.log("GetCart");
     let userData = await Users.findOne({_id:req.user.id});
     res.json(userData.cartData);
     
})

//>>>>>>>>> My orders <<<<<<<<<<<<<<<<<<

app.post('/addmyorder',fetchUser,async (req,res)=>{
    console.log("Added",req.body.itemId);
   let userData = await Users.findOne({_id:req.user.id});
   userData.orderData[req.body.itemId] +=1;
   await Users.findOneAndUpdate({_id:req.user.id},{orderData:userData.orderData});
   res.send("added")

})
// creating endpoint to  remove ...<<<<

app.post('/removemyorder',fetchUser,async (req,res)=>{
    console.log("Removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if( userData.orderData[req.body.itemId]>0)
    userData.orderData[req.body.itemId] -=1;
    await Users.findOneAndUpdate({_id:req.user.id},{orderData:userData.orderData});
    res.send("Removed")
})

// creating endpoint to get cartdata
app.post('/getorder',fetchUser,async (req,res)=>{
    console.log("Get order");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.orderData);
})

 // schema>>>>>>>>>>>>>
 const Client=mongoose.model("Myntraclient",{
    id:{
     type:Number,
     required:true,
},
url:{
    type:String,
},
title:{
    type:String,
},
price:{
    type:Number,
},
items:{
    type:String,

},
name:{
    type:String,
    required:true,
},
pincode:{
    type:Number,
    required:true,
},
number:{
    type:Number,
    required:true,
},
fulladdress:{
    type:String,
    required:true,
},
code:{
    type:String,
    required:true,
},
date:{
    type:Date,
  default:Date.now,
},

avilable:{
    type:Boolean,
    default:true,
},

})

app.post('/addorder',async (req,res)=>{
    let clients = await Client.find({});
    let id;
    if(clients.length>0)
    {
        let last_client_array=clients.slice(-1);
        let last_product= last_client_array[0];
        id=last_product.id+1;
    }
    else{
        id=1;

    }
    const client = new Client({
        id:id,
        url:req.body.url,
        title:req.body.title,
        price:req.body.price,
        items:req.body.items,
        name:req.body.name,
       number:req.body.number,
       pincode:req.body.pincode,
       fulladdress:req.body.fulladdress,
       code:req.body.code,
    });
    console.log(client);
    await client.save();
    console.log("saved")
    res.json({
    success:true,
    name:req.body.name,
    })
})

//>>>>>>>>>>>>>>>>>>>>>>

app.post('/removeorder',async (req,res)=>{
    await Client.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })

})


//>>>>>>>>>>>>>>>>>>>>>>

app.get('/allorder',async(req,res)=>{
    let clients= await Client.find({});
    console.log("All product fetched");
    res.send(clients);                           
})

app.delete('/delete',async(req,res)=>{
    await Client.deleteOne({
        name:req.body.name,
       number:req.body.number,
       code:req.body.code,
    })
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name
    })
})

app.listen(port,(error)=>{
    if (!error){
        console.log("Running"+port)
    }
    else{
        console.log("Error")
    }
})