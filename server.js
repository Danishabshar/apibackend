const express = require('express');
const mongoose = require('mongoose');

const postModal=require('./post-modal');
const customerModal=require('./customer-table')
const OrderModal=require('./order-modal')



const cors = require('cors');

const app =express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));



    mongoose.connect('mongodb://localhost/webapi',()=>{
    console.log('connected to DB')
}),
    (err)=>console.log(err)

    


    app.listen(process.env.PORT || 3003,(err)=>{
        if(!err){
            console.log('server started at 3003')
        }
      })
    

    

    
    
    
    app.post("/adding",(req,res)=>{
        console.log(req.body)
        postModal.create({ 
            inventory_id:req.body.inventory_id,
            inventory_Type :req.body.inventory_Type,
            item_name:req.body.item_name,
            Available_quantity:req.body.Available_quantity,
            
     })
    .then((data)=>{
     res.status(200).send(data)
     console.log("created")
    }).catch((err)=>{
    console.log(err)
    })                        
    })



    app.post("/cust",(req,res)=>{
        console.log(req.body)
        customerModal.create({ 
            
            
            customer_id:req.body.customer_id,
            customer_name:req.body.customer_name,
            Email:req.body.Email
    

     })
    .then((data)=>{
     res.status(200).send(data)
     console.log("created")
    }).catch((err)=>{
    console.log(err)
    })                        
    })



    app.post("/order",(req,res)=>{
        console.log(req.body)
        OrderModal.create({ 
            
            
            customer_id:req.body.customer_id,
            customer_name:req.body.customer_name,
            item_name:req.body.item_name,
            Quantity:req.body.Quantity

            
    

     })
    .then((data)=>{
     res.status(200).send(data)
     console.log("created")
    }).catch((err)=>{
    console.log(err)
    })                        
    })




    app.get("/posts",(req,res)=>{
        postModal.find().then((data)=>{
            res.status(200).send(data)
            
        }).catch((err)=>{
            res.status(400).send(err)
        })
    })
    
//
    
    

    // app.put("/post/update/:", (req, res)=> {
    //     userModal.find({email: req.params.id}).then((userData)=> {
    //         userModal.updateOne({email: req.params.id}, {isPromoted: !userData[0].isPromoted}).then(()=> {
    //             res.redirect("/");
    //         }).catch((err)=> {
    //             res.status(400).send(err)
    //         })
    //     })
        
    // });