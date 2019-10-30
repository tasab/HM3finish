import React from "react";
import { API_link } from "./APIlink";
import { useFetch } from "./hookusefetch";

export const EposodeInfo = props => {
  const url = `${API_link.URL}/${props.match.params.showId}/season/${
    props.match.params.seasonNumber
  }/episode/${props.match.params.episodeNumber}?api_key=${
    API_link.KEY
  }&language=en-US`;

  const [episodeInfo, isLoading] = useFetch(url);

  return isLoading ? (
    "lading"
  ) : (
    <>
      <h1>{episodeInfo.name}</h1>
      <p>{episodeInfo.overview}</p>
      <img
        alt={"img"}
        src={`https://image.tmdb.org/t/p/w300/${episodeInfo.still_path}`}
      />
      <h3>Season number {props.match.params.seasonNumber}</h3>
      <h3>Episode number {props.match.params.episodeNumber}</h3>
    </>
  );
};
