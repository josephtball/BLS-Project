import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';

const port = process.env.PORT || 8080;

const app = express();

// morgan logger
app.use(logger('dev'));

// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// express static folder
app.use('/static', express.static(path.join(__dirname, '../public/assets')));

import htmlRoutes from './controllers/htmlRoutes.js';
import apiRoutes from './controllers/apiRoutes.js';

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(port, () => console.log(`Server listening on PORT ${port}`));