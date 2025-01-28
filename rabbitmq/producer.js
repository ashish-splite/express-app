import amqp from 'amqplib';

let channel;

// Connect to RabbitMQ
const connectRabbitMQ = async () => {
  const connection = await amqp.connect('amqp://127.0.0.1:5672');
  channel = await connection.createChannel();
  await channel.assertQueue('emailQueue');
  console.log('RabbitMQ connected and queue asserted');
};

// Publish message to the queue
const publishToQueue = async (queueName, message) => {
  channel.sendToQueue(queueName, JSON.stringify(message));
  console.log(`Message sent to ${queueName}: ${message}`);
};

export { connectRabbitMQ, publishToQueue };
