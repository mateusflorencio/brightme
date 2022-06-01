const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/IndexRoute');
const listarProdutosRoute = require('./routes/ListarProdutosRoute')
const sucessRoute = require('./routes/Sucess')
const DescricaoProdutoRoute = require("./routes/DescricaoProdutoRoute")
const UserRoute = require("./routes/user/UsersRoute")

const app = express();

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/', indexRouter);
app.use('/produtos', listarProdutosRoute)
app.use('/sucess', sucessRoute)
app.use('/produto', DescricaoProdutoRoute)
app.use('/user', UserRoute)

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, _next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;