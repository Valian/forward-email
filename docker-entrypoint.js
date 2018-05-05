const ForwardEmail = require('./index.js');

const forwardEmail = new ForwardEmail({
  limiter: {
    clientOptions: {
      host: 'redis'
    }
  }
});

forwardEmail.server.listen(process.env.PORT || 25);
