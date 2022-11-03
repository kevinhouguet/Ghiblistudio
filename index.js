const express = require('express');
const router = require('./router');
const animes = require("./data/animes.json");

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('./public'));

app.use("/", (req,res,next) => {
  res.locals.animes = animes;
  next();
});

app.use(router);

app.listen(port, () =>{
  console.log(`Listenning on http://localhost:${port}`);
});
