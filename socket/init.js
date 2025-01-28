import { Socket } from 'socket.io';

let io;

export const initSocket = (server) => {
    io = new Socket(server, {
        cors: {
            origin: 'http://example.com',
            credentials: true,
        }
    });
    io.on('connection', (socket) => {
        console.log('A user connected');

        // Listen for custom events
        socket.on('message', (data) => {
            console.log('Message received:', data);
        });

        // send event to connected client
        socket.emit('message', 'message')

        // broadcast to all clients
        io.emit('message', 'message');

        // Handle disconnection
        socket.on('disconnect', () => {
            console.log('A user disconnected');
        });
    });

}

export const broadcastEvent = (data) => {
    io.emit('message', JSON.stringify(data));

}
