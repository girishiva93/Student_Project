import Rating from "@mui/material/Rating";
import { Box } from "@mui/system";
import { base_url } from "../../constants/api";

const MovieBanner = (props: any) => {
  let {
    release_date,
    rating,
    title,
    name,
    mediaType,
    poster_path,
    firstAirDate,
  } = props;

  return (
    <>
      <h3>File Path Name</h3>
      <p>Compontents - Card - movieBanner.tsx </p>
    </>
  );
};
export default MovieBanner;
