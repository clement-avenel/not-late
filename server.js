// Import package.json data
const _package = require('./package.json')
// Import db config
if(process.env.GITHUB_ACTIONS !== "true"){ const dbConfig = require('./db.config.js'); }
// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import CORS
let cors = require("cors");
// Import helmet
var helmet = require('helmet');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes");

// Connect to Mongoose and set connection variable
mongoose.connect(`mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.HOST}/${process.env.DB}?retryWrites=true&w=majority`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
        .then(() => {})
        .catch((err) => console.log('\x1b[31m', 'Error connecting db', err));

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.enable('trust proxy', 1);

// Setup CORS Options
var corsOptions = {
  origin: [
    'https://not-late.herokuapp.com',
    'http://localhost:3000'
  ]
};
// Configure CORS
app.use(cors(corsOptions))
//Use helmet
app.use(helmet());

// Use Api routes in the App
app.use('/', apiRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

// error handler middleware
app.use((error, req, res, next) => {
  res.status(error.status || 500).send({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
});

module.exports = app
