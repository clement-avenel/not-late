var port = process.env.PORT || 8080;
// Initialize express router
let router = require('express').Router();
// Import controllers
var apologyController = require('./controllers/apologyController');
// Serve React files on root
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
// Apology routes
router.get('/api', apologyController.index);
// Export API routes
module.exports = router;
