const { animesJSONFormat } = require("../middlewares");
const animes = animesJSONFormat();
// console.log(animes)

const mainController = {
  renderHomepage: (req,res) => {
    res.render('index', {animes});
  },

  renderFilmsListpage(req,res) {
    const filter = req.query.filter;
    const filterProperty = {
      "titre": "title",
      "date": "release_date",
      "duree": "duration"
    }
    if(filter){
      animes.sort((a,b) => {
        if(typeof a[filterProperty[filter]] === 'string'){
          return String(a[filterProperty[filter]]).localeCompare(String(b[filterProperty[filter]]));
        } else{
          return a[filterProperty[filter]] - b[filterProperty[filter]];
        }
      })
    }
    // console.log(animes[0])
    res.render('filmsList', {animes, filter, filterProperty});
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
