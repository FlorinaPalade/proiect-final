import React from "react";
import { Layout, MovieList } from "../components";

export const HomePage = () => {
  return (
    <Layout>
      <div style={{ background: "#b3b5bb", minHeight: "100vh" }}>
        <MovieList isPopTVShow props="Most popular TVs" />
        <MovieList isPopMovie props="Most popular movies" />
        <MovieList props="Coming Soon" />
      </div>
    </Layout>
  );
};
