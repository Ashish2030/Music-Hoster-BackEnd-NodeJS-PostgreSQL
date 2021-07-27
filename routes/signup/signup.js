const express = require('express');
const router = express.Router();
const db=require("../../db/conn");
const User=db.users;


//signup
router.post("/signup",async(req,res)=>
{
    try
    {
        console.log(req.body);
        await User.create(req.body);
        res.status(201).send("User Save");
    }
    catch(error)
    {
        res.status(400).send(error.message);
    }
    
})

module.exports = router;