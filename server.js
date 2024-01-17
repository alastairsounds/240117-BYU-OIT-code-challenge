import express from "express";
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/movies", async (req, res) => {
  const url = "https://api.themoviedb.org/3/authentication";
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
    .then((json) => console.log(json))
    .catch((err) => console.error("error:" + err));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
