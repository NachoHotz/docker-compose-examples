const app = require('./src/app');
require('./src/db/connection');

app.listen(3001, () => {
  console.log('Server running on port 3001!');
});
