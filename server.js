var express = require('express');
var app = express();
var PORT = 7000;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.listen(PORT, function() {
  console.log("Listening on port %s", PORT);
});