const words= require("./data/words");

// 
server.get("/hangman",(req,res)=>{
    res.status(200).json({words:words})
});

server.get("/hangman/word/:id",(res,req)=>{
         const parmId = req.params.id // 999
         const wordObj= words.find((obj)=>obj.id ===parmId);
    if(wordObj){
         res.status(200).json({word: wordObj});
         
    } else {
         res.status(404).json({error:"Word doesn't exist"})
    };
});

// ROUTER
// Chat - App
