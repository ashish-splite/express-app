import amqp from 'amqplib';

const startConsumer = async () => {
    const connection = await amqp.connect('amqp://127.0.0.1:5672');
    const channel = await connection.createChannel();

    await channel.assertQueue('emailQueue');

    console.log('Waiting for messages in emailQueue...');

    await channel.consume('emailQueue', async (msg) => {
        console.log('consumed message1: ', msg);
        channel.ack(msg); // Acknowledge message

    });

};

export { startConsumer };
