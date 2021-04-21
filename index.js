const app = require('./server.js')
// Setup server port
var port = process.env.PORT || 8080;
// Launch app to listen to specified port
app.listen(port, function () {
    process.stdout.write('\x1b[0m');
    process.stdout.write("Running not-late API on port : ")
    console.log('\x1b[32m%s\x1b[0m', port);
});
