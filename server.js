
const express = require('express');
const app = express();
const port = 3010;
const bodyParser = require('body-parser');
const logger = require('morgan');

app.use(express.static('public'));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.listen(port, function(){
  console.log('Node js Express js Tutorial');
});

app.get('/', function (req, res) {
   res.sendFile(path.join(__dirname,'public', 'index.html'));
});
