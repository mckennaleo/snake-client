let connection;

const setupInput = function(conn) {
  
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', () => {
    handleUserInput();
  });
  return stdin;
};

const handleUserInput = function() {
  const stdin = process.stdin;
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'q') {
      connection.write('Say: Hello');
    }
    if (key === 'e') {
      connection.write('Say: Wow!');
    }
    if (key === 'r') {
      connection.write('Say: I\'ll get you!');
    }
    if (key === 'w') {
      connection.write('Move: up');
    }
    if (key === 'a') {
      connection.write('Move: left');
    }
    if (key === 'd') {
      connection.write('Move: right');
    }
    if (key === 's') {
      connection.write('Move: down');
    }
  });
};

module.exports = {setupInput};