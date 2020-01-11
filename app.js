const express = require('express');

const app = express();
const connectDB = require('./config/db');

connectDB();
app.set('view engine', 'pug');
app.set('views', 'views');
app.use('/', require('./routes/visitors'));

app.listen(3000, () => console.log('Listening on port 3000...'));
