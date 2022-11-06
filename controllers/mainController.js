const animes = require("../data/animes.json");

const mainController = {
  renderHomepage: (req,res) => {
    res.render('index', {animes});
  },

  renderFilmsListpage(req,res) {
    const filter = req.query.filter;
    if(filter){
      animes.sort((a,b) => {
        if(typeof filter === 'string'){
          return String(a[filter]).localeCompare(String(b[filter]));
        } else{
          return a[filter] - b[filter];
        }
      })
    }
    res.render('filmsList', {animes, filter});
  },

  renderFilmpage: (req, res, next) => {
    const anime = animes.find(e => e.id === Number(req.params.id));
    if(!anime){
      next();
    }
    res.render('film', {anime});
    // res.send(JSON.stringify(idFilm));
  },

  renderSearchResultpage: (req, res) => {
    const nameRequest = req.query.name;
    const animesFiltered = animes.filter(e => e.title.toLowerCase().includes(nameRequest));
    res.render('searchResult', {animesFiltered});
  },

  renderLoginpage: (req,res) => {
    const username = req.body.loginUsername;
    res.send(`Bonjour ${username}`);
  },

  renderNotFoundpage: (req,res) => {
    res.status(404);
    res.render('404');
  }
};

module.exports = mainController;
