const express=require("express");
const app = express();

app.use(express.json());

const {showmsg,addmsg} = require("./user")

app.post("/addmessage",async (req,res)=>{
        const msg = req.body;
        await addmsg(msg);
        res.json({res:"Added SuccessFully"});

})


app.get("/message", async(req,res)=>{
    const data =await showmsg();
    res.json(data);
})

app.listen(4000,()=>(console.log("Server Started")))