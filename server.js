var express = require('express');
var GitHubApi = require("node-github");


var app = express();
var PORT = process.env.PORT || 7000;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/register", function(req, res) {
  res.sendFile(process.cwd() + "/views/register.html");
});

app.get("/github/:user", function(req, res) {
  var github = new GitHubApi({
      version: "3.0.0"
  });
  var user = req.params.user;
  github.user.getFrom({
    user: user
  }, function(err, gitResponse){
    res.send(gitResponse);
  });
})

app.get("/dashboard", function(req, res) {
  res.sendFile(process.cwd() + "/views/dashboard.html");
});

  


app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});