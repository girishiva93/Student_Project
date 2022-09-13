import * as React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Box } from "@mui/system";
import MovieBanner from "../../components/card/movieBanner";
import Slider from "react-slick";
import { useMovies } from "../../modules/context";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Loader from "../../utils/Loader";

const Movies = (props: any) => {
  let { searchMoviesItem } = props;
  const { error, isLoading, filterMovies, filteredMovies } = useMovies();
  const [alignment, setAlignment] = React.useState<string | null>("left");

  const getWindowDimensions = React.useCallback(() => {
    const { innerWidth: width } = window;
    return {
      width,
    };
  }, []);

  const [windowDimensions, setWindowDimensions] = React.useState<any | null>();
  const [numberOfCards, setNumberOfCards] = React.useState<number>();

  const screenResponsive = (width: number) => {
    if (width > 1300) {
      setNumberOfCards(6);
    } else if (width >= 700) {
      setNumberOfCards(4);
    } else if (width >= 600) {
      setNumberOfCards(3);
    } else if (width >= 400) {
      setNumberOfCards(2);
    }
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow:
      numberOfCards === 6 && filteredMovies.length > 6
        ? numberOfCards
        : numberOfCards === 4
        ? 6
        : numberOfCards === 2
        ? 2
        : 3,
    slidesToScroll:
      numberOfCards === 6 && filteredMovies.length > 6
        ? numberOfCards
        : numberOfCards === 4
        ? 4
        : numberOfCards === 2
        ? 2
        : 3,
    nextArrow: <ArrowRightIcon style={{ width: "19px", height: "11px" }} />,
    prevArrow: <ArrowLeftIcon style={{ width: "19px", height: "11px" }} />,
  };

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    setAlignment(newAlignment);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", handleResize);
    screenResponsive(windowDimensions?.width);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions?.width, getWindowDimensions]);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("load", handleResize);
    return () => window.removeEventListener("load", handleResize);
  }, [windowDimensions?.width, getWindowDimensions]);

  return (
    <div className="movie_banner_container">
      {isLoading ? (
        <div className="mt-5">
          <Loader />
        </div>
      ) : (
        <Box sx={{ mt: 4, mb: 6 }}>
          <h4>Data is Stored in filteredMovies</h4>
          <p>File Location - movies- movies.tsx</p>
          <p>Child Component Name - MovieBanner </p>
          <p>
            Child Component File Location - Compontents - Card - movieBanner.tsx{" "}
          </p>
        </Box>
      )}
    </div>
  );
};

export default Movies;
