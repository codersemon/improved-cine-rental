// dependencies
import { useContext } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import MovieList from "../components/MovieList";
import Sidebar from "../components/Sidebar";
import { ThemeContext } from "../contexts/ThemeContext";

// component
const Homepage = () => {
  // ThemeContext
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Header />
      <main>
        <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
          <Sidebar />
          <MovieList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
