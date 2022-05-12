import React, { useState, useEffect } from "react";
import {
  Background,
  Container,
  Loader,
  MovieCard,
  MoviesWrapper,
  Poster,
  Title,
} from "./MovieOrSerialList.styled";
import { BASE_URL } from "../../../api";
import { Link } from "react-router-dom";

export function MovieList({ isPopMovie, isPopTVShow, props }) {
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState([]);

  async function getList() {
    if (isPopMovie) {
      const response = await fetch(`${BASE_URL}/MostPopularMovies/k_j2lrw34m`);
      const data = await response.json();
      setList(data.items);
    } else if (isPopTVShow) {
      const response = await fetch(`${BASE_URL}/MostPopularTVs/k_j2lrw34m`);
      const data = await response.json();
      setList(data.items);
    } else {
      const response = await fetch(`${BASE_URL}/ComingSoon/k_j2lrw34m`);
      const data = await response.json();
      setList(data.items);
    }
    setLoading(false);
  }

  useEffect(() => {
    getList();
    // eslint-disable-next-line
  }, []);

  return (
    <Background>
      <Container>
        <Title>{props}</Title>
        {loading ? (
          <Loader>Loading...</Loader>
        ) : (
          <MoviesWrapper>
            {list.map((item) => (
              <MovieCard key={item.id}>
                <Link to={`/title/${item.id}`}>
                  <Poster src={item.image} alt={`Poster:${item.title}`} />
                </Link>
              </MovieCard>
            ))}
          </MoviesWrapper>
        )}
      </Container>
    </Background>
  );
}
