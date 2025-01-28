import express from 'express';
import http from 'http';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import dataRoutes from './routes/data.js';
import { initSocket } from './socket/init.js';
// import { sendToKafka } from './kafka/kafkaProducer.js';
// import startConsumer from './kafka/kafkaConsumer.js';
// import redisClient from './redis/redisClient.js';
// import { publishMessage } from './redis/redisPubSub.js';
// import { connectRabbitMQ, publishToQueue } from './rabbitmq/producer.js';
// import { startConsumer } from './rabbitmq/consumer.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);
initSocket(server);

app.use(express.json());
app.use(cookieParser());

// To serve the static files from public folder
app.use(express.static("public"));






//    connectRabbitMQ()
//   .then(() => startConsumer())
//   .then(() => publishToQueue('emailQueue', 'message'))
//   .catch((err) => console.error('Error initializing RabbitMQ:', err));

// await startConsumer();

// sendToKafka('user_events', { username: 'username', email: 'email' });


// Connect to MongoDB
// connectDB();

// Define routes
app.use('/auth', authRoutes);
app.use('/data', dataRoutes);

// Start server
server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
