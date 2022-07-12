const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override')
const { configSequelize } = require('./src/data/db');

const indexRouter = require('./src/routes/index-route');
const contaUsuarioRouter = require('./src/routes/user/conta-usuario');
const blogRouter = require('./src/routes/blog-route')
const carrinhoRouter = require('./src/routes/carrinho-route');
const produtoRouter = require('./src/routes/produto-route')
const pagamentoRouter = require('./src/routes/pagamento-route')
const produtosRouter = require('./src/routes/produtos-route')
const loginRouter = require('./src/routes/login-route')
const sucessRouter = require('./src/routes/sucess');

const app = express();
configSequelize.start();

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
app.use(methodOverride('X-HTTP-Method-Override'))

//routes
app.use('/', indexRouter);

app.use('/produtos', produtosRouter)
app.use('/sucess', sucessRouter)
app.use('/blog', blogRouter)
app.use('/carrinho', carrinhoRouter)
app.use('/conta', contaUsuarioRouter)
app.use('/produto', produtoRouter)
app.use('/pagamento', pagamentoRouter)
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