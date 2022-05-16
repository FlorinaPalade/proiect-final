import React from "react";
import {
  Background,
  Container,
  Loader,
  Title,
  Error,
  Details,
  Video,
} from "./MovieDetails.styled";

export function MovieDetails({ fetching, movieDetails, error }) {
  return (
    <Background>
      <Container>
        <div>
          {fetching && <Loader>Loading details....</Loader>}
          {error && <Error>Error message: {error}</Error>}
          {!fetching && !error && (
            <Details>
              <Title>{movieDetails.title}</Title>
              <Video src={movieDetails.trailer.linkEmbed}></Video>
              <div>id:{movieDetails.id}</div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </Details>
          )}
        </div>
      </Container>
    </Background>
  );
}
