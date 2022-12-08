const animes = require("../data/animes.json");
module.exports = {
  animesJSONFormat(){
    animes.map(anime => {
      if(anime.duration % 60 === 0){
        anime.duration = anime.duration / 60 + 'h';
      } else {
        const heures = Math.floor(anime.duration / 60) + 'h';
        const minutes = (anime.duration % 60) < 10 ? '0' + anime.duration % 60 : anime.duration % 60;
        anime.duration = heures + minutes;
      }
    });
    // console.log(animes);
    return animes;
  }
}