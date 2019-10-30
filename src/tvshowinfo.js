import React from "react";
import { API_link } from "./APIlink";
import { Link } from "react-router-dom";
import { useFetch } from "./hookusefetch";

export const TvShowInfo = props => {
  let url = `${API_link.URL}/${props.match.params.movieId}?api_key=${
    API_link.KEY
  }&language=en-US`;

  const [tvShowinformation, isLoading] = useFetch(url);

  return isLoading ? (
    "lading"
  ) : (
    <>
      <h1>{tvShowinformation.original_name}</h1>
      <p>{tvShowinformation.overview}</p>
      <img
        alt={"img"}
        src={`https://image.tmdb.org/t/p/w300/${tvShowinformation.poster_path}`}
      />
      <h3>Number of seasons {tvShowinformation.number_of_seasons}</h3>
      <h3>Number of episodes {tvShowinformation.number_of_episodes}</h3>
      {tvShowinformation.seasons.map(({ name, id, season_number }) => (
        <li key={id}>
          <Link
            to={`/info-season/${id}/${
              props.match.params.movieId
            }/${season_number}`}
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  );
};
