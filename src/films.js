// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(movie => movie.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesOfDirector = getMoviesFromDirector(array, director);
  let result = moviesOfDirector.reduce((sum, movie) => sum + movie.score, 0) / moviesOfDirector.length;
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(movie => movie.title).sort().slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let arrayTmp = [...array].sort((movieA, movieB) => movieA.title < movieB.title ? 1 : -1);
  let result = arrayTmp.sort((movieA, movieB) => movieA.year > movieB.year ? 1 : -1);
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let arrayByGenre = array.filter(movie => movie.genre.includes(genre));
  let totalOfMoviesWithScore = arrayByGenre.filter(movie => movie.score).length;
  let result = arrayByGenre.reduce((sum, movie) => sum + movie.score, 0) / totalOfMoviesWithScore;
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const parseHours = (duration) => {
    const pattern = /((\d*)h)? ?((\d*)min)?/;
    const newDuration = pattern.exec(duration);
    const hours = parseInt(newDuration[2]);
    const minutes = parseInt(newDuration[4]);
    if (!Number.isNaN(hours) && !Number.isNaN(minutes)) { return ((hours * 60) + minutes); }
    else if (!Number.isNaN(hours) && Number.isNaN(minutes)) { return (hours * 60); }
    else if (Number.isNaN(hours) && !Number.isNaN(minutes)) { return minutes; }
  }

  let result = array.map(movie => {
    let newDuration = parseHours(movie.duration)
    return {
      ...movie,
      duration: newDuration
    }
  })
  console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {    
  let pelisPorYear = array.filter(movie => {
    if (movie.year === year) {
      return movie;
    }
  });
  pelisPorYear.sort((movieA, movieB) => movieA.score > movieB.score ? 1 : -1);
  //let result = pelisPorYear.reverse()[0];
  let result = pelisPorYear.slice(pelisPorYear.length - 1);
  console.log("EXERCICE 8 ->", result);
  return result;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
