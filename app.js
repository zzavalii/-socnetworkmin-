const express = require('express'); 
const mongoose = require('mongoose'); 
const config = require('config'); 
const User = require('./models/User'); 
const PORT = config.get('port') || 5000; 
 const auth = require('./middlewares/auth.middleware')
const app = express(); 
 
app.use(require('cors')({origin: '*'})); 
app.use(express.json());

app.use('/users', auth, require('./routes/users'));
app.use('/auth', require('./routes/auth'));

async function start() { 
    try { 
        await mongoose.connect(config.get('mongoURI')); 
        app.listen(PORT, () => { console.log(`App has been started on port ${PORT}`) }); 
    } 
    catch(e) { 
        console.log(e); 
    } 
} 
 
start(); 
 

