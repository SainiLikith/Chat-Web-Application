const client = require("./data/client");


server.get("/clients",(req,res)=>{
    res.status(200).json({clients:clients})
});
server.get("/clients/:id",(req,res)=>{
    // id = :":id"
    const id =req.params.id;
    const cusObj = clients.find((e)=> e.id===id);

    if (cusObj){
         res.status(200,).json({customer: cusObj});
    }
    else {
         res.status(404).json({error:"customer details not found"}) 
    }

});
server.post("/clients",(req,res)=>{
    const newCustomer= req.body;
    const newId = (clients.find((obj)=> obj.id === newCustomer.id));

    // clients.push(newCustomer)
    if(newId){
         res.status(404).json({error:"User already exists"});
    
    }
    else{
         clients.push(newCustomer);
         res.status(200).json({clients:clients})
    }
})

