var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var garageRouter = require('./routes/garage');
var carRouter = require('./routes/car');
var cors = require('cors')
var app = express();
const mongoose = require('mongoose');
mongoose.connect(`mongodb://automotive:handi1615@ds149252.mlab.com:49252/autos`, {
  useNewUrlParser: true
});
app.use(cors())
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {

  console.log('\n 😎 connected to autos db ---')
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/garages', garageRouter);
app.use('/car', carRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json('error');
});

module.exports = app;
