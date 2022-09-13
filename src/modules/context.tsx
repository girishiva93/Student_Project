import axios from "axios";
import * as React from "react";
import z from "zod";
import { config } from "../config";
import { queryObject } from "../types";

const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  poster_path: z.string(),
  release_date: z.string(),
  vote_average: z.number(),
  media_type: z.string(),
  name: z.string(),
  first_air_date: z.string(),
  backdrop_path: z.string(),
});

const Axios = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: config.apiKey,
  },
});

type Movie = z.infer<typeof MovieSchema>;

const MovieContext = React.createContext({
  movies: [] as Movie[],
  filteredMovies: [] as Movie[],
  searchedMovies: [] as Movie[],
  isLoading: false,
  error: "",
  searchMovies: (_params: queryObject) => {},
  filterMovies: (_params: string) => {},
});

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [movies, setMovies] = React.useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = React.useState<Movie[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [searchedMovies, setSearchedMovies] = React.useState<Movie[]>([]);

  const searchMovies = async (params: queryObject) => {
    try {
      const response = await Axios.get(
        `/search/movie?language=en-US&query=${params?.query}&page=${params?.page}&include_adult=${params?.include_adult}`
      );
      setSearchedMovies(response.data.results);
    } catch (error: any) {
      setError(error.message || "Something has gone wrong");
    } finally {
      setIsLoading(false);
    }
  };
  const filterMovies = async (params: string) => {
    if (params !== undefined) {
      const filteredMovie = movies.filter((el) => el.media_type === params);
      if (filteredMovie.length > 0) {
        setFilteredMovies([...filteredMovie]);
      }
    }
  };

  React.useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await Axios.get(`/trending/all/day`);
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        filteredMovies,
        isLoading,
        error,
        filterMovies,
        searchMovies,
        searchedMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => {
  const context = React.useContext(MovieContext);
  if (!context) {
    throw new Error("useMovies must be used within a MovieProvider");
  }
  return context;
};
