const express = require('express');
const router = express.Router();
const mainController = require('./controllers/mainController');

router.get("/", mainController.renderHomepage);

router.get("/films", mainController.renderFilmsListpage);

router.get("/film/:id", mainController.renderFilmpage);

router.get("/search", mainController.renderSearchResultpage);

router.post("/login", express.urlencoded({extended: false}), mainController.renderLoginpage);

router.use(mainController.renderNotFoundpage);

module.exports = router;
