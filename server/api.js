import fetch from "node-fetch";

export const searchMovies = (searchTerm) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYzdkYjViMWM2ZmQ0NDRkOWU5MTBlNTY2NWExYjY1ZCIsInN1YiI6IjY1YTgwMjY1NTI5NGU3MDEyZGQyZWUzMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.gqKK2rMTkD4E7fXnIs8HmSB2RsZg1FRTHvkfwMR-GW4",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    // // TODO: limit the number of results to 10
    // // source: https://www.themoviedb.org/talk/623012ed357c00001b46ae10
    // // No option to limit number of results via parameter
    // // see: https://www.themoviedb.org/talk/522eeae419c2955e90252e23
    // .then((data) => data.results.slice(0, 10))
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
};
