/* eslint-disable react/prop-types */
// dependencies
import ratingIcon from "../../assets/star.svg";

// component
const Rating = ({ star }) => {
  const stars = Array(star).fill(ratingIcon);
  return (
    <div className="flex items-center space-x-1 mb-5">
      {stars?.map((star, index) => (
        <img key={index} src={star} width={14} height={14} alt="star" />
      ))}
    </div>
  );
};

export default Rating;
