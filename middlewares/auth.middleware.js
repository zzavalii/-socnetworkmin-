const config = require('config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
 if(req.method === 'OPTIONS'){
    return next();
 }  
 try{
   const token = req.headers.authorization.split(' ')[1];
   
   if(!token){
    return res.status(401).json({message: 'Auth is required'})
   }
    const decoded = jwt.decode(token, config.get('jwtSecret'));
    req.user = decoded;
    next();

   return next();
 }
 catch(e){
    return res.status(401).json({message: 'No access. Login please!'})
 }
 }