import React from "react";
import { Layout, MovieList} from "../components";


export const HomePage = () => {
  
  return (
    <Layout>
     <MovieList isPopTVShow props="Most popular TVs"/>
     <MovieList isPopMovie props="Most popular movies"/>
     <MovieList props="Coming Soon"/>
    </Layout>
  );
};



