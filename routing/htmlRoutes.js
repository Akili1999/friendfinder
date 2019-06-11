// We require the extension "path"
var path = require("path");
// we are exporting these functions for our survey, and home page
module.exports = function(app){
    app.get ("/survey", function(req, res){
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    app.use(function(req, res){
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};