// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

//console.log("Path " +path.join(__dirname, "../public/exercise.html"))

module.exports = function(app) {

    app.get("/exercise", function(req, res) {
    //console.log("got inside");
     res.sendFile(path.join(__dirname, "../public/exercise.html"));
   });

   app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  
};
