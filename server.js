// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import CORS
let cors = require("cors");
// Import helmet
var helmet = require('helmet');
// Initialise the app
let app = express();
// Import routes
let apiRoutes = require("./api-routes");
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
