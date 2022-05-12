import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
  margin-right: 3rem;
`;

export const InputElement = styled.input`
  display: block;
  width: 100%;
  font-size: 1.6rem;
  line-height: 2rem;
  padding: 8px 1.6rem;
  border: 1px solid #eaeaea;
  border-radius: 2rem;
  color: #c5d9e2;
  background-color: transparent;
  transition: border 0.3s;

  &:focus {
    border: 1px solid #b0b0b0;
  }
  &[type="search"] {
    padding-left: 3.5rem;
  }
`;

export const SearchIcon = styled(FontAwesomeIcon)`
  font-size: 1.6rem;
  line-height: 2.4rem;
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 50%;
  left: 0.8rem;
  transform: translateY(-50%);
  color: #c5d9e2;
`;
