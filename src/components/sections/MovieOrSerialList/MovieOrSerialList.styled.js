import styled from "styled-components";

export const Background = styled.div`
  background-color: #b3b5bb;
  padding: 3rem 1.5rem;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 120rem;
  margin: 0 auto;
  & > div {
    overflow-x: auto;
    flex-wrap: nowrap;
    scroll-behavior: smooth;
  }
`;

export const Title = styled.h1`
  padding-left: 1rem;
  margin-bottom: 2rem;
`;

export const MoviesWrapper = styled.div`
  display: flex;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 2rem;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px gray;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    background: #cdfff9;
    border-radius: 1rem;
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.15);
  color: #ff8427;
`;

export const MovieCard = styled.div`
  display: flex;
  padding: 1rem;
  min-height: 21rem;
  min-width: 15rem;
  align-items: center;

  position: relative;
  transition: transform 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Poster = styled.img`
  width: 100%;
  border-radius: 5%;
  display: block;
  margin: 0 auto 1rem;
`;
