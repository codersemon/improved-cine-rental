// dependencies
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../contexts/CartContext";
import { getAllMovies } from "../data/movieData";
import MovieItemCard from "./MovieItemCard";
import MovieModal from "./MovieModal";

// component
const MovieList = () => {
  // cart context
  const { cartState, dispatch } = useContext(CartContext);

  // getting all movies data from fake database
  const movies = getAllMovies();

  // movie details modal state
  const [showDetails, setShowDetails] = useState(false);
  // movie state to show in modal
  const [selectedMovie, setSelectedMovie] = useState(null);

  // handle movie details modal open
  const handleModalOpen = (event, movie) => {
    event.preventDefault();

    // set data for modal
    setSelectedMovie(movie);

    // show modal
    setShowDetails(true);
  };

  // handle movie add to cart
  const handleMovieAddToCart = (event, movie) => {
    // stop event propagation & default action
    event.stopPropagation();
    event.preventDefault();

    // find movie on cart
    const isMovieInCart = cartState?.find((item) => item?.id === movie?.id);

    if (isMovieInCart) {
      // if already in cart show message
      toast.error("Movie already added in cart!");
    } else {
      // in not exit in cart, add to cart
      dispatch({
        type: "ADD_ITEM_IN_CART",
        payload: movie,
      });

      // if movie add from details modal, then close the modal
      setShowDetails(false);

      // show message after adding movie to cart
      toast.success("Movie added to cart!");
    }
  };

  return (
    <>
      {showDetails && (
        <MovieModal
          selectedMovie={selectedMovie}
          onClose={() => setShowDetails(false)}
          onAddToCart={(e) => handleMovieAddToCart(e, selectedMovie)}
        />
      )}
      <div className="content">
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
          {movies?.length > 0 &&
            movies?.map((movie) => (
              <MovieItemCard
                key={movie?.id}
                movie={movie}
                onOpenModal={(e) => handleModalOpen(e, movie)}
                onAddToCart={(e) => handleMovieAddToCart(e, movie)}
              />
            ))}

          {movies?.length < 1 && (
            <p className="text-xl">No movies found in database!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default MovieList;
