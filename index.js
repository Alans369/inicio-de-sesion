const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const Index = require('./routes/index');
const  aa = require('./routes/aaron');


const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 4000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',Index);
app.use('/aaron',aa);


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

module.exports = app;