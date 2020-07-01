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
  });
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });
  return conn;
};
module.exports = {connect};