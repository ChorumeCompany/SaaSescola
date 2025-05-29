import RabbitMQStream from 'rabbitmq-stream-js-client';

const streamName = 'hello-nodejs-stream';
export const clientPromise = RabbitMQStream.connect({
  hostname: process.env.RABBITMQ_HOST || 'localhost',
  port: 5552,
  username: process.env.RABBITMQ_USER || 'guest',
  password: process.env.RABBITMQ_PASSWORD || 'guest',
  vhost: process.env.RABBITMQ_VHOST || '/',
});

console.info('RabbitMQ client connecting...');
const streamSizeRetention = 5 * 1e9;

clientPromise
  .then((client) => {
    client.createStream({
      stream: streamName,
      arguments: { 'max-length-bytes': streamSizeRetention },
    });
    console.info('RabbitMQ client connected and stream created');
  })
  .catch((err) => {
    console.error('Failed to connect to RabbitMQ:', err);
  });

clientPromise
  .then(async (client) => {
    const publisher = await client.declarePublisher({
      stream: streamName,
    });

    console.log('Sending message to RabbitMQ stream...');

    await publisher.send(Buffer.from('Hello RabbitMQ!'));
  })
  .catch((err) => {
    console.error('Failed to declare publisher or send message:', err);
  });
