import kafka from 'kafka-node';

const startConsumer = async()=>{
    const client = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
    const consumer = new kafka.Consumer(
      client,
      [{ topic: 'user_events', partition: 0 }],
      { autoCommit: true }
    );
    
    consumer.on('message', (message) => {
      console.log('Message consumed from Kafka:', message);
    });
    
    consumer.on('error', (err) => {
      console.error('Kafka Consumer error:', err);
    });
}

export default startConsumer;


