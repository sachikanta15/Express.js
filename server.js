const app = require('./app')
const connectDb = require('./data/database')
const port = 5000;
connectDb();
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
 