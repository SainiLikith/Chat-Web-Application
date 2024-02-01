// const convoEle= document.getElementById("conversation-container");
// console.log(convoEle);
// function sendMessage(e) {
//     e.preventDefault();
//     //console.log("hello"); 
//     const userMessage = value();
//     const msgContent= {
//         author:"user",
//         message:userMessage
//     }
//     updateConvo(msgContent)
// };

// function value() {
// const inputValue =document.getElementById("user-input").value;
// // console.log(inputValue);
// // //console.log("hello");
// return inputValue
// };

// function updateConvo(obj){
//     // console.log(obj);
//     const {author,message} = obj
//     // console.log(message);
// const para = document.createElement("p");
// para.classList.add("message",author);
// para.innerHTML = message
// convoEle.append(para);
// };

// fetch("http://localhost:8080/cat-message")
// .then((res)=> res.jason)
// .then(data =>{
//     console.log(data);
//     updateConvo(data)
// })
const conversationElem = document.getElementById("conversation-container");

fetch("http://localhost:8080/customer",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body: JSON.stringify({
        name: "likith",
        email:"likith@gmail.com",
        phone: 987654321
    })
})

function sendMessage(e) {
    e.preventDefault();

    const userMessage = getInputValue();
   

    const msgContent = {
        author: "user",
        message: userMessage

    }

    fetch("http://localhost:8080/cat-message")
        .then((res) => res.json())
        .then(data => {
            console.log(data)
            updateConversation(data)

        })

        updateConversation(msgContent);

};

function getInputValue() {
    const inputvalue = document.getElementById("user-input")
    const text = inputvalue.value;
    inputvalue.value = ""
    return text
   
};

// message: heyyy
// message: meow
function updateConversation(object) {
    // console.log(object.message);
    const { author, message } = object;
    const para = document.createElement("p");
    para.classList.add("message", author);

    para.innerHTML = `<span>${message}</span>`
    conversationElem.append(para);


};

