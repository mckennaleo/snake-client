const net = require('net');
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('connection successful');
    conn.write('Name: LKM');
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);
  });


  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', () => {
    handleUserInput();
  });
  return stdin;
};
setupInput();
module.exports = {connect};