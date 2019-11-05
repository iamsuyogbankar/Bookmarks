const path = require('path');

const http = require('http');

const express = require('express');

const mainRoutes = require('../Assignment3/routes/page1');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes);

app.listen(4000);