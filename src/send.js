import amqp from "amqplib/callback_api";
// import { Buffer } from "buffer";
// window.Buffer = window.Buffer || import("buffer").Buffer;
const sendMsg = (msg) => {
  amqp.connect("amqp://localhost:5672", (err0, conn) => {
    if (err0) {
      console.log({ err0 });
      throw err0;
    }

    conn.createChannel((err1, channel) => {
      if (err1) throw err1;

      const queue = "hello";
      // const msg = "hello, world";

      channel.assertQueue(queue, { durable: false });

      // channel.sendToQueue(queue, Buffer.from(msg));
      setInterval(() => {}, 3000);
      console.log(" [x] Sent %s", msg);
    });
  });
};

export default sendMsg;
