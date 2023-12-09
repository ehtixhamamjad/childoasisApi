const app = require('./app.js');
const dotenv = require('dotenv');
const connection = require('./config/connection.js');

dotenv.config({
    path: "./config/config.env",
});

connection.execute("SELECT 1")
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is running " + process.env.PORT);
    });
  })
  .catch(err => {
    console.error("Error in DB Connection: " + JSON.stringify(err, undefined, 2));
});