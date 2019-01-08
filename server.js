// nOlGNmj0zccn84Zn
const http = require('http');
const debug = require('debug')('node-angular');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

mongoose.connect('mongodb+srv://JoeB:nOlGNmj0zccn84Zn@cluster0-fq32y.mongodb.net/test?retryWrites=true')
  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('Database connection failed.');
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const onError = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const bind = typeof port === 'string' ? `pipe ${port}` : `port ${port}`;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof port === 'string' ? `pipe ${port}` : `port ${port}`;
  debug('Listening on ' + bind);
};

const apiRoutes = require('./backend/controller/apiRoutes');
app.use('/api', apiRoutes);

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
server.on('error', onError);
server.on('listening', onListening);
server.listen(port, () => { console.log(`Server on PORT ${port}`) });
