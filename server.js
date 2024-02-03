const express = require("express");
const cors = require("cors");
const {clients} = require("./data/client")
const {words} = require("./data/words")
// create Express server
const server = express();
server.use(cors());
server.use(express.json())
server.get("/cat-message",(req,res)=>{
    const arr =["meow", "Hi! how are you today?", "You're awesome", "Did you have your breakfast?" ]
    const random = arr[Math.floor(Math.random()* arr.length)]
    console.log(random);
    const obj = {author:"cat", message:random};
    // ["meow", "Hi! how are you today?", "You're awesome", "Did you have your breakfast?" ]
   setTimeout(()=>{
        res.status(200).json(obj)
        // 
   },2000);
})
const customers = [
    {
         name: "Ganith",
         email: "ganith@gmail.com",
         phone: 9999229922,
    },
     {
         name: "Shiva",
         email: "shiva@gmail.com",
         phone: 9999349922,
    },{
         name: "Akhil",
         email: "akhilh@gmail.com",
         phone: 9944244922,
    }, {
         name: "Prasad",
         email: "prasad@gmail.com",
         phone: 9999255922,
    },

]

server.get("/customer", (req, res) => {
    res.status(200).json({customers: customers});
// res.send("hello")
})
server.post("/create-message",(req,res)=>{
  const newCustomer = req.body
});

const PORT = 8080 
server.listen(PORT,() => console.log(`server running at port ${PORT}`))