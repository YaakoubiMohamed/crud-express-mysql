const express = require('express');

const bodyParser = require('body-parser');

// creation d'express application
const app = express();

const port = process.env.PORT || 4000;


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});
// Require user routes
const userRoutes = require('./src/routes/routes')
//const produitRoutes = require('./src/routes/produit.routes')
// using as middleware
app.use('/api/v1/users', userRoutes)
//app.use('/api/v1/produits', produitRoutes)
// listen for requests


app.listen(port,()=>{
    console.log(' server listening on port', port);
})