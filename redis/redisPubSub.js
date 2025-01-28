import { createClient } from 'redis';

// Publisher
const redisPublisher = createClient();
redisPublisher.connect();

// Subscriber
const redisSubscriber = createClient();
redisSubscriber.connect();


// Subscribe to a channel
redisSubscriber.subscribe('user_notifications', (message) => {
  console.log('Received message from Redis Pub/Sub:', message);
});

// Publish a message to the channel
export const publishMessage = async (channel, message) => {
  await redisPublisher.publish(channel, message);
  console.log(`Message published to channel ${channel}: ${message}`);
};
