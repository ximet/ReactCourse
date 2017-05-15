const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('node-jsx').install();

const app = express();
const port = 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./app/routes/coreRoutes.js')(app);

app.get('*', function(req, res) {
    res.json({
        'route': 'Sorry this page does not exist!'
    });
});

app.listen(port);
console.log('Server is Up and Running at Port : ' + port);
