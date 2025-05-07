const express = require('express');
const path = require('path');
const Index = require('./routes/index');

const app = express();

const port = parseInt(process.env.PORT) || process.argv[3] || 5000;

app.use(express.static(path.join(__dirname, 'public')));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',Index);


app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

module.exports = app;