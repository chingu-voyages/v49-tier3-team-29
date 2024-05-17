import express from 'express';
const router = express.Router();
import User from'../models/Users.js';

//get all users
router.get('/', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

router.get('/:username', async(req, res)=> {
    try{
        const user = await User.find({ username: req.params.username});
        if(!user){
            return res.status(404).json({message: 'user not found'});
        }
        res.json(user)
    } catch(err){
        res.status(500).json({ message: err.message })
    }

})

export default router;
