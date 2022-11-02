const express = require('express');
const router = require('./router');

const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static('./public'));

app.use(router);

app.listen(port, () =>{
  console.log(`Listenning on http://localhost:${port}`);
});
