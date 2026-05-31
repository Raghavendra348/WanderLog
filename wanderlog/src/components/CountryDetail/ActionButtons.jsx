import { useContext } from "react";
import { BucketListContext } from "../../context/BucketListContext";

const ActionButtons = ({
  country,
}) => {
  const {
    addToWishlist,
    addToVisited,
  } = useContext(
    BucketListContext
  );

  const handleWishlist =
    () => {
      addToWishlist(country);

      alert(
        "Added to Wishlist"
      );
    };

  const handleVisited =
    () => {
      addToVisited(country);

      alert(
        "Marked as Visited"
      );
    };

  return (
    <div
      className="
      flex
      gap-4
      justify-center
      mt-8
      flex-wrap
    "
    >
      <button
        onClick={handleWishlist}
        className="
          bg-blue-600
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-blue-700
        "
      >
        Add To Wishlist
      </button>

      <button
        onClick={handleVisited}
        className="
          bg-green-600
          text-white
          px-6
          py-3
          rounded-lg
          hover:bg-green-700
        "
      >
        Mark As Visited
      </button>
    </div>
  );
};

export default ActionButtons;