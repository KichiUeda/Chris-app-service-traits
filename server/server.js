const app = require('./index.js');

app.listen(3005, (err) => {
  if (err) {
    throw err;
  }
  console.log('server running on port', 3005);
});
