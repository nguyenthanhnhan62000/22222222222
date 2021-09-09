const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
app.use(express.static('public'))
app.set('view engine','ejs')
app.set('views','./views')

app.get('/', (req, res) => {
  res.render('home');
});

server.listen(3000);