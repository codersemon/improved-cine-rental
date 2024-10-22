/* eslint-disable react/prop-types */
// dependencies
import tagIcon from "../assets/tag.svg";
import { getImgURL } from "../utils/utility";
import Rating from "./header/Rating";

// component
const MovieItemCard = ({ movie, onOpenModal, onAddToCart }) => {
  return (
    <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <a href="" onClick={onOpenModal}>
        <img
          className="w-full object-cover"
          src={getImgURL(movie?.cover)}
          alt=""
        />
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie?.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie?.genre}</p>
          <Rating star={movie?.rating} />
          <button
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            onClick={onAddToCart}
          >
            <img src={tagIcon} alt="tag" />
            <span>${movie?.price} | Add to Cart</span>
          </button>
        </figcaption>
      </a>
    </figure>
  );
};

export default MovieItemCard;
