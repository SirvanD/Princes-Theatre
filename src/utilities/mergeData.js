const getMovies = (fwMovies, cwMovies, AUDRate) => {
  let moviesData = { movies: [] };
  //commenting started
  console.log(AUDRate);
  console.log(typeof AUDRate);
  for (let fwMovie of fwMovies) {
    for (let cwMovie of cwMovies) {
      if (fwMovie.Title === cwMovie.Title) {
        moviesData.movies.push({
          id: fwMovie.ID,
          title: fwMovie.Title,
          poster: fwMovie.Poster,
          fwPrice: (fwMovie.Price * parseFloat(AUDRate)).toFixed(2),
          cwPrice: cwMovie.Price.toFixed(2),
        });
        break;
      }
    }
  }
  return moviesData;
};

export default getMovies;
