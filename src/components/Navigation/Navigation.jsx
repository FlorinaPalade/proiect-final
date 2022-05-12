import React from "react";
import {
  Header,
  Logo,
  LogoText,
  Nav,
  Link,
  Container,
} from "./Navigation.style";
import { Link as DefaultLink } from "react-router-dom";
import { faVideoCamera } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../Input/Input";

export const Navigation = () => {
  return (
    <Header>
      <Container>
        <DefaultLink to="/">
          <LogoText>MyMovieApp</LogoText>
          <Logo icon={faVideoCamera} alt="poster" />
        </DefaultLink>
        <Nav>
          <Input />
          <Link to="/">Home</Link>
        </Nav>
      </Container>
    </Header>
  );
};
