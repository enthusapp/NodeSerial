import SerialPort from 'serialport';

module.exports = (portName, msg) => {
  const port = new SerialPort(portName, { baudRate: 9600 });

  port.once('open', () => {
    console.log(`${portName} opened`);
    console.log(`Send ${msg}`);
    port.write(msg, (err) => {
      if (err) console.log(err);
    });
  });
};
