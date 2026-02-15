import { WebSocketServer } from "ws";



const wss = new WebSocketServer({port:8080})

//This acts as a server 

wss.on("connection", function(socket){
  console.log("User connected.")

  
  socket.on("message",(e)=>{
    console.log(`${e.toString()} message was received from the client.`)

    if(e.toString() === 'ping'){
      socket.send("pong")
    }
  })
})