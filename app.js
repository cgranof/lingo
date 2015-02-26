var express = require('express');
var bodyParser = require('body-parser');
var indexController = require('./controllers/index.js');
var quizController = require('./controllers/quiz.js');

var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/lingo');

// Seed the database
require('./models/seeds/wordSeed.js');

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.get('/translate', indexController.translate);
app.get('/error', indexController.error);
app.get('/quiz', quizController.quiz);

app.post('/wordSubmit', indexController.wordSubmit);

var server = app.listen(7694, function() {
	console.log('Express server listening on port ' + server.address().port);
});
