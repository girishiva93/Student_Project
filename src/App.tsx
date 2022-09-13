import "./assets/styles/App.css";
import { MovieProvider } from "./modules/context";
import Footer from "./screenPages/footer/Footer";
import Header from "./screenPages/header/Header";
import LandingPage from "./screenPages/landing-page/landingPage";
import Movies from "./screenPages/movies/Movies";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Header />
        <LandingPage />
        <Movies />
        <Footer />
      </MovieProvider>
    </div>
  );
}

export default App;
