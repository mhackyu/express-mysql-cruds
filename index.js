const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const debug = require('debug')('app');
const api_item_router = require('./src/routers/api.itemRoutes');
const itemRouter = require('./src/routers/itemRoutes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/public/')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use('/api/items', api_item_router);
app.use('/items', itemRouter);

app.get('/', (req, res) => {
  res.render('index.ejs', { name: 'sample' });
});

app.get('/api', (req, res) => {
  res.render('api.ejs');
});

app.listen(process.env.PORT || 4000, () => {
  console.log('Application is listening to port 4000');
});

