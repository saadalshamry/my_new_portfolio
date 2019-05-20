const express = require('express');
const app = express();
const path= require('path');
app.use(express.static('public'))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/public/index.js'))
});





let PORT= process.env.port || 3000;
app.listen(PORT, ()=> console.log(`server is runing on port ${PORT}`))