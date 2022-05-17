import React from "react";
import { Layout } from "../components";
import { useParams } from "react-router-dom";
import { MovieDetails } from "../components/sections/MovieDetails/MovieDetails";
import { useGetMovieDetails } from "../components";

export const MoviePage = () => {
  // eslint-disable-next-line
  const { id } = useParams();
  const { fetching, movieDetails, error } = useGetMovieDetails();

  return (
    <Layout>
      <MovieDetails
        fetching={fetching}
        movieDetails={movieDetails}
        error={error}
      />
    </Layout>
  );
};
