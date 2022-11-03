const animeCardElem = document.body.querySelectorAll(".anime-card");
animeCardElem.forEach(card => {
  card.addEventListener('click',(event)=>{
    console.log(event.currentTarget);
    const idFilm = event.currentTarget
      .querySelector(".anime-card-content-id")
      .textContent;
    window.location.pathname = `/film/${idFilm}`;
  });
});
