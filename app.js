const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/IndexRoute');
const contaUsuarioRouter = require('./routes/user/ContaUsuario');
const blogRouter = require('./routes/BlogRoute')
const carrinhoRouter = require('./routes/CarrinhoRoute');
const decricaoProdutoRouter = require('./routes/DescricaoProdutoRoute')
const FinalizarCompraRouter = require('./routes/FinalizarCompraRoute')
const listarProdutosRoute = require('./routes/ListarProdutosRoute')
const loginRouter = require('./routes/LoginRoute')
const sucessRoute = require('./routes/Sucess');

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

app.use('/', indexRouter);
app.use('/produtos', listarProdutosRoute)
app.use('/sucess', sucessRoute)
app.use('/blog', blogRouter)
app.use('/carrinho', carrinhoRouter)
app.use('/conta', contaUsuarioRouter)
app.use('/produto', decricaoProdutoRouter)
app.use('/finalizar', FinalizarCompraRouter)
app.use('/login', loginRouter)


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