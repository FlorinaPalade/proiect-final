import React from "react";
import { Layout } from "../components";
import { useParams } from "react-router-dom";

export const MoviePage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <h1>{id}</h1>
    </Layout>
  );
};
