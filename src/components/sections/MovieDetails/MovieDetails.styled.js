import styled from "styled-components";

export const Background = styled.div`
  background-color: #c5d9e2;
  min-height: 100vh;
  padding: 3rem 1.5rem;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
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

export const Error = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(250, 250, 250, 0.15);
  color: red;
`;

export const Details = styled.div`
  display: block;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%;
`;

export const Video = styled.iframe`
  position: absolute;
  top: 0;
  left: 15%;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
  display: flex;
  @media screen and (max-width: 768px) {
    left: 0;
  }
`;

export const Moreinfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Poster = styled.img`
  height: 30rem;
  float: left;
  margin: 2rem;
`;

export const Plot = styled.div`
  display: inline-block;
  width: 50%;
  text-align: justify;
  font-size: 1.4rem;
  @media screen and (max-width: 768px) {
    width: 90%;
    padding-bottom: 1rem;
  }
`;

export const Rating = styled.div`
  display: block;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #2b2922;
  flex: 1 100%;
  text-align: center;
`;
