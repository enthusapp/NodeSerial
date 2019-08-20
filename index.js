import planProtocol from './planProtocol';
import sender from './sender';

console.log(process.argv);

sender(process.argv[2], planProtocol(Number(process.argv[3])));
