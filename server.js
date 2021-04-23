// Import express
let express = require('express');

const path = require('path');
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
// Rate limiter to prevent denial-of-service attacks
var RateLimit = require('express-rate-limit');
var limiter = new RateLimit({
  windowMs: 1*60*1000, // 1 minute
  max: 5
});
app.use(limiter);
// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
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
// The "catchall" handler: for any request that doesn't match above
app.use('*', (req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

module.exports = app
