const getMovies = (fwMovies, cwMovies) => {
  let moviesData = { movies: [] };

  for (let fwMovie of fwMovies) {
    for (let cwMovie of cwMovies) {
      if (fwMovie.Title === cwMovie.Title) {
        moviesData.movies.push({
          id: fwMovie.ID,
          title: fwMovie.Title,
          poster: fwMovie.Poster,
          fwPrice: fwMovie.Price.toFixed(2),
          cwPrice: cwMovie.Price.toFixed(2),
        });
        break;
      }
    }
  }
  return moviesData;
};

export default getMovies;
