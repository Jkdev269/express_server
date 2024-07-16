const express=require('express')
const app=express();
app.use(express.static('public'))
app.use((req,res)=>{
    res.status(404)
    res.send(`<h1>Error 404!!! Page Not Found</h1>`)

})
app.listen(3000,()=>{
    console.log("server is starting");
})