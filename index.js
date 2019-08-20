import SerialPort from 'serialport';

const portName = 'COM23';

const port = new SerialPort(portName, { baudRate: 9600 });

const planNumber = 2;

const command = [
  0x02,
  0xFA,
  0xFF,
  0xFF,
  0xF9,
  planNumber,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x00,
  0x01,
];

const msg = new Uint8Array(
  command.concat([command.reduce((a, c) => a + c, 0), 0xF7, 0x03]),
);

port.once('open', () => {
  console.log(`${portName} opened`);
  console.log(`Send ${msg}`);
  port.write(msg, (err) => {
    if (err) console.log(err);
  });
});
