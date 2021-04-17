// Main entry for the node app
// requires in the app object from express
// and mounts it to a port
const app = require('./app');

const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
