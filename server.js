const path = require('path')
const createError = require('http-errors');
const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cookieSession = require('cookie-session')
const cookieParser = require('cookie-parser');
const expressip = require('express-ip');
const cloudflare = require('cloudflare-express');

let app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(__dirname + '/public'));

app.use(helmet());

app.use(expressip().getIpInfoMiddleware);
app.use(cloudflare.restore());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cookieParser("dhaskFASFAJLd$@$@!Fj13!!"));

app.use(cookieSession({
    secret: "dhaskFASFAJLd$@$@!Fj13!!",
    maxAge: 365 * 24 * 60 * 60 * 1000
}));

app.use('/', require('./routes/index.js'));

app.listen(8080, () => console.log(`Web Server is running`))