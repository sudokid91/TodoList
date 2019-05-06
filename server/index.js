const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.port || 8008;

app.use(
  cors ({
      origin : "localhost:3000",
      credentials: true
  })  
);

app.set("views", path.join(__dirname, "./client/src/index.js"));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)

app.use(express.static(__dirname, "client"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/api', tasks);

app.listen(port, function () {
    console.log(`Server is running on port: ${port}`);
});