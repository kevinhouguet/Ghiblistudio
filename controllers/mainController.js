const animes = require("../data/animes.json");

const mainController = {
  renderHomepage: (req,res) => {
    res.render('index', {animes});
  },

  renderFilmpage: (req, res) => {
    const idFilm = animes.find(e => e.id === Number(req.params.id));
    res.render('film');
    // res.send(JSON.stringify(idFilm));
  },

  renderNotFoundpage: (req,res) => {
    res.status(404);
    res.send('404 not found !!');
  }
};

module.exports = mainController;
