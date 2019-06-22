const express = require('express');
const app = express()
const routes = require('./Routes/api/api-routes');

//Port for Heroku use or default(local)
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
};

//Add API Routes
app.use('/api/listing', routes);

//Start server
app.listen(PORT, function(err){
    if (err) throw (err);
    console.log('API server listening on port: ' + PORT);
});

