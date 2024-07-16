const express=require('express');
const serveStatic = require('serve-static');
const path = require('path');
const app=express();
app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'first.html'));
});
app.get('/api/data', (req, res) => {
    res.json({ message: 'Hello, this is your data!' });
});
app.use((req,res)=>{

    
    res.status(200)
    res.send(`<h1>Error 404!!! Page Not Found</h1>`)

})
app.listen(3000,()=>{
    console.log("server is starting");
})