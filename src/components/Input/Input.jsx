import React, { useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Container, InputElement, SearchIcon } from "./Input.style";

export function Input() {
  const [show, setShow] = useState(false);
  return (
    <Container>
      <SearchIcon onClick={() => setShow(!show)} icon={faSearch} />
      {show ? (
        <InputElement type="search" placeholder="Search"  />
      ) : null}
    </Container>
  );
}
