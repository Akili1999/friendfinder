// we are referencing express, and telling the program to require it
var express = require("express");
// we are mapping the use of express to the var named "app"
var app = express();
// we do process.env.PORT so that heroku will adapt the port, and we also set it to 8080 so that we can use localhost to test our app
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// this is the routing for our api and html
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});