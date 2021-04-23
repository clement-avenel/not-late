var port = process.env.PORT || 8080;
// Initialize express router
let router = require('express').Router();
// Import controllers
var apologyController = require('./controllers/apologyController');
// Apology routes
router.get('/', apologyController.index);
// Export API routes
module.exports = router;
