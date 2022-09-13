import { Spinner } from "react-bootstrap";

const Loader = () => {
  return (
    <Spinner
      animation="border"
      className = "loader"
      role="status"
    >
    </Spinner>
  );
};

export default Loader;
