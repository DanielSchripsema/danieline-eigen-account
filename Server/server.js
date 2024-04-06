const express = require('express');
const amqp = require('amqplib');

async function start() {
    const app = express();
    const port = 3000;

    const connection = await amqp.connect(process.env.MESSAGE_QUEUE);
    const channel = await connection.createChannel();
    await channel.assertQueue('logs', { durable: true });

    app.get('/', (req, res) => {
        const message = { text: 'Hello world!' };

        channel.sendToQueue('logs', Buffer.from(JSON.stringify(message)), {
            contentType: 'application/json',
            persistent: true
        });

        console.log('sent a message to rabbitmq');
        res.json({ success: true });
    });

    app.listen(port, () => {
        console.log(`app listening at http://localhost:${port}`);
    });
}

start();