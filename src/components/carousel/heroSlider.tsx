import {
  useEffect,
  useState,
  useCallback,
  MouseEvent,
  ChangeEvent,
} from "react";
import { Carousel } from "react-responsive-carousel";
import { useMovies } from "../../modules/context";
import _ from "lodash";
import "../../assets/styles/carousel.scss";
import { heroSlide } from "./slideData";
import { base_url } from "../../constants/api";
import Rating from "@mui/material/Rating";
import axios from "axios";

import {
  Card,
  CardMedia,
  Typography,
  Grid,
  Button,
  Paper,
  InputBase,
} from "@mui/material";

const HeroSlider = () => {
  const { searchMovies, movies, searchedMovies } = useMovies();
  const [searchKeyword, setSearchKeyword] = useState("");
  const onSearch = () => {
    console.log(searchKeyword);
    searchMovies({
      include_adult: true,
      page: 1,
      query: searchKeyword,
    });
  };

  const handler = useCallback(_.debounce(onSearch, 5000), []);
  const onSearchHandler = (e: MouseEvent) => {
    e.preventDefault();
    handler();
  };

  const onTypeSearchHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setSearchKeyword(e.target.value);
    searchMovies({
      include_adult: true,
      page: 1,
      query: e.target.value,
    });
  };

  useEffect(() => {
    // setUserMovies([...searchedMovies])
  }, [searchedMovies]);

  return (
    <div style={{ color: "#494949", position: "relative" }}>
      <Carousel
        className="home-carousel"
        infiniteLoop
        stopOnHover={false}
        showStatus={false}
        autoPlay
        showArrows={false}
        showThumbs={false}
      >
        {heroSlide.map((item, index) => {
          return (
            <Card raised key={index} className="Banner">
              <Grid container spacing={0} className="BannerGrid">
                <Grid item xs={12} key={index}>
                  <CardMedia className="Media" image={item.Image}></CardMedia>
                </Grid>
              </Grid>
            </Card>
          );
        })}
      </Carousel>
      <div className="carousel-overlay">
        <div className="mobile__design__wrap">
          <Typography variant="h2" className="landing-page-title">
            Welcome to the weekend watch
          </Typography>
          <p className="landing-page-text">
            Millions of Movies, TV Shoes and many more
          </p>
          <Paper component="form" className="search__heroslide">
            <InputBase
              className="input__search"
              placeholder="Search for movie, tv shoes, and person"
              inputProps={{
                "aria-label": "search for movie, tv shoes, and person",
              }}
              value={searchKeyword}
              onChange={(e) => onTypeSearchHandler(e)}
            />
            <Button
              variant="contained"
              className="search-button"
              onClick={onSearchHandler}
            >
              Search
            </Button>
          </Paper>
          {searchedMovies.length > 0 && searchKeyword.length !== 0 ? (
            <div className="dataResult">
              {searchedMovies.map((value, key) => {
                return (
                  <div className="dataItem " key={key}>
                    <div className="search__container">
                      <div className="search_flex ">
                        <div className="search__image">
                          {value.backdrop_path ? (
                            <img
                              src={base_url + value?.backdrop_path}
                              alt="movie"
                              width="100%"
                            />
                          ) : (
                            <img
                              src="https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg?w=2000"
                              alt="movie"
                              width="100%"
                            />
                          )}
                        </div>
                        <h5 className="search__title">
                          {value.title ? value.title : value.name}
                        </h5>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : null }
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
