require('dotenv').config();
const app = require('./index.js');

app.listen(process.env.SERVER_PORT, (err) => {
  if (err) {
    console.log('something went wrong: ', err);
  }
  console.log('server running on port', process.env.SERVER_PORT);
});
