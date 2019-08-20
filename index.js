import planProtocol from './planProtocol';
import sender from './sender';

const port = process.argv[2];
const planNumber = Number(process.argv[3]);

function errorOut(msg) {
  console.log(msg);
  process.exit(new Error(msg));
}

if (typeof port !== 'string') errorOut('잘못된 포트 이름입니다.');
if (typeof planNumber !== 'number') errorOut('잘못된 플랜 번호입니다.');

sender(port, planProtocol(planNumber));
