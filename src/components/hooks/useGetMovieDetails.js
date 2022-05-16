import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export function useGetMovieDetails() {
  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState("");
  const [fetching, setFetching] = useState(true);
  const { id } = useParams();

  async function getMovieDetails() {
    try {
      const { data, status, statusText } = await axios.get(
        `https://imdb-api.com/en/API/Title/k_j2lrw34m/${id}/FullActor,FullCast,Posters,Trailer,Ratings,Wikipedia,`
      );
      if (status === 200) {
        if (data.errorMessage === "") {
          setMovieDetails(data.items);
        } else {
          setError(data.errorMessage);
        }
        setMovieDetails(data);
      } else {
        setError(statusText);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setFetching(false);
    }
  }
  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line
  }, []);

  return { fetching, movieDetails, error };
}
