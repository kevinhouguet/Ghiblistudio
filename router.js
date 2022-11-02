const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

router.get("/", mainController.renderHomepage);

router.get("/film/:id", mainController.renderFilmpage);

router.use(mainController.renderNotFoundpage);

module.exports = router;
