const Events=require("events");
let eventEmitter=new Events();
eventEmitter.on("greet",()=>{
    console.log("Hello,Musafir ki Sena")
})
eventEmitter.emit("greet")