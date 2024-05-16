const express = require('express');
const router = express.Router();
const User = require('../models/Users');


router.get('/:username', async (req, res) =>{
    try{
        const username = req.params.username;
        const user = await User.findOne({username});

        if(!user){
            console.log("not found")
        }

        res.json(user);
    } catch (err){
        console.error(err);
        res.status(500).json({message: "error"})
    }

    
});

module.exports = router;