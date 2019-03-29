const cons = require('consolidate');
const express = require('express');
const path = require('path');

const routes = require('./src/routes');

const app = express();

app.engine('html', cons.mustache);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'build'));

function getRouteMeta(lang, page) {
  return {
    lang,
    title: routes[lang].pages[page].title,
    description: routes[lang].description,
    ogTitle: routes[lang].pages[page].ogTitle,
    ogPath: routes[lang].pages[page].ogPath,
  };
}

app.get(['/', '/index.html'], (req, res) => {
  res.render('index', getRouteMeta('en', 'home'));
});

app.get('/about', (req, res) => {
  res.render('index', getRouteMeta('en', 'about'));
});

app.get(['/cn/'], (req, res) => {
  res.render('index', getRouteMeta('zh', 'home'));
});

app.get('/cn/about', (req, res) => {
  res.render('index', getRouteMeta('zh', 'about'));
});

// Serve the service-worker.js with HTTP caching disabled
app.get('/service-worker.js', (req, res, next) => {
  res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.header('Expires', '0');
  res.header('Pragma', 'no-cache');
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(process.env.PORT || 9000);
