//establish required files/middleware/modules/PORT
var express = require("express");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 8080;
var app = express();
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller.js");


//use express to reach static folder files, utilize JSON, run handlebars for dynamic HTML, listen to PORT for rerquests. Middleware for assistance in PUT requests.
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});