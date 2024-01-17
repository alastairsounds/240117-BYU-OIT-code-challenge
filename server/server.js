import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

app.get("/movies", async (req, res) => {
  const { search } = req.query;

  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
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
    .then((json) => {
      json.results = json.results.slice(0, 10);
      // redefine each movie in json.results to include only the properties we want:
      // movie_id, title, poster_image_url
      json.results = json.results.map((movie) => {
        return {
          movie_id: movie.id,
          title: movie.title,
          poster_image_url: movie.poster_path,
        };
      });

      json.results.forEach((movie) => {
        console.log(movie);
      });
    })
    .catch((err) => console.error("error:" + err));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
