import SerialPort from 'serialport';

const port = new SerialPort('COM23', { baudRate: 9600 });

port.once('open', () => {
  console.log('opened');
});

function MFAlarmStart() {

}

MFAlarmStart();
