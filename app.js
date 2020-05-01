const express = require('express');
const app = express();
const userRoutes = require('./Routes/Index');

app.use(express.urlencoded({extended: false}))
app.use((req, res, next) => {
  console.log('Middleware just ran');
  next();
})
app.use('/items', userRoutes);

app.get('/', (req, res) => {
  res.json({message: 'Please start with /items'});
})

const port = process.env.PORT || 2000

app.listen(port, ()=> {console.log(`Server started at ${port}`)})