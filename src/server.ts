import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

console.log('✅ WebSocket server running on ws://localhost:8080');

wss.on('connection', (ws: WebSocket) => {
  console.log('🔗 Client connected');

  ws.on('error', console.error);

  ws.on('message', (data, isBinary) => {
    if (isBinary) {
      console.log('📦 received binary');
    } else {
      console.log('📩 received:', data.toString());
    }

    ws.send(isBinary ? data : `Server received: ${data}`);
  });
});
