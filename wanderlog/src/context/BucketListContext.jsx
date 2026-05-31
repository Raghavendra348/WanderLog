import {
  createContext,
  useState,
  useEffect,
} from "react";

export const BucketListContext =
  createContext();

const BucketListProvider = ({
  children,
}) => {
  const [wishlist, setWishlist] =
    useState([]);

  const [visited, setVisited] =
    useState([]);

  useEffect(() => {
    const savedWishlist =
      JSON.parse(
        localStorage.getItem(
          "wishlist"
        )
      ) || [];

    const savedVisited =
      JSON.parse(
        localStorage.getItem(
          "visited"
        )
      ) || [];

    setWishlist(savedWishlist);
    setVisited(savedVisited);
  }, []);

  const addToWishlist = country => {
    const exists = wishlist.find(
      item =>
        item.cca3 === country.cca3
    );

    if (exists) return;

    const updated = [
      ...wishlist,
      country,
    ];

    setWishlist(updated);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updated)
    );
  };

  const addToVisited = country => {
    const exists = visited.find(
      item =>
        item.cca3 === country.cca3
    );

    if (exists) return;

    const updated = [
      ...visited,
      country,
    ];

    setVisited(updated);

    localStorage.setItem(
      "visited",
      JSON.stringify(updated)
    );
  };

  return (
    <BucketListContext.Provider
      value={{
        wishlist,
        visited,
        addToWishlist,
        addToVisited,
      }}
    >
      {children}
    </BucketListContext.Provider>
  );
};

export default BucketListProvider;