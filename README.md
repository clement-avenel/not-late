# not-late API
A simple API to find the best apology if you're late !

## Installation
```node
npm install
```
## Setup
You have to create an additional file which called "db.config.js", with the following entries.
```node
process.env.USERNAME="XXXXX",
process.env.PASSWORD="XXXXXXXXXXXX",
process.env.HOST= "xxxxxxxxx.xxxxx.mongodb.net",
process.env.DB= "XXXXXXXX"
```
## Usage

To run the API on localhost, simply execute :
```node
nodemon index
```

## Test
```node
npm run test
```
