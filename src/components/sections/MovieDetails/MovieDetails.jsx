import React from "react";
import {
  Background,
  Container,
  Loader,
  Title,
  Error,
  Details,
  Video,
  Poster,
  Moreinfo,
  Rating,
  Plot,
  VideoContainer,
} from "./MovieDetails.styled";

export function MovieDetails({ fetching, movieDetails, error }) {
  return (
    <Background>
      <Container>
        {fetching && <Loader>Loading details....</Loader>}
        {error && <Error>Error message: {error}</Error>}
        {!fetching && !error && (
          <Details>
            <Title>{movieDetails.fullTitle}</Title>
            <VideoContainer>
              <Video
                src={movieDetails.trailer.linkEmbed}
                frameborder="0"
                allowFullScreen
                scrolling="no"
              ></Video>
            </VideoContainer>
            <Moreinfo>
              <Poster src={movieDetails.image} alt="poster" />
              <Plot>{movieDetails.wikipedia.plotShort.plainText}</Plot>
              <Rating>IMDB Rating: {movieDetails.ratings.imDb}</Rating>
            </Moreinfo>
          </Details>
        )}
      </Container>
    </Background>
  );
}
