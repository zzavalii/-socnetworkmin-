const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

// auth/register
router.post('/register', async (req, res) => {
    try {

        const { login, password } = req.body;
        const candidate = await User.findOne({login});

        if(candidate) {
           return res.status(400).json({message: 'User Already exists'});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        
        const user = new User({...req.body, password: hashedPassword}); 

        await user.save();

        return res.status(201).json({message: 'Success registration!'});

    }
    catch(e) {
        console.log(e);
        res.status(500).json({message: 'Internal server error'});
    }
});


router.post('/login', async (req, res) => {
    try {
        
        const { login, password } = req.body;
        const candidate = await User.findOne({login});
        
        if(!candidate) {
            res.status(400).json({message: 'User not found'});
        }
        
        const isMatch = await bcrypt.compare(password, candidate.password);

        if(!isMatch) {
            res.status(401).json({message: 'Bad credentionals'});
        }

        const token = jwt.sign(
            { userId: candidate._id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        );

        res.json({token, id: candidate._id});

    }
    catch(r) {
        console.log(e);
        res.status(500).json({message: 'Internal server error'});
    }
})

module.exports = router;