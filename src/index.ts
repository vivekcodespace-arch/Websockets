import { WebSocketServer } from "ws";
 
const wss = new WebSocketServer({port : 8080});

//event handler
wss.on("connection",function(socket){
  console.log("hello word")
  socket.send(`The Current price of solana is ${Math.random()}`)
  // setInterval(() => {
  //   socket.send("There is a crime in the world..")
  // }, 500);

  socket.on("message",(e)=>{
    if(e.toString() === "ping"){
      socket.send("pong")
    }
  })

})