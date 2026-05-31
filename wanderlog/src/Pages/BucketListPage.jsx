import {
  useContext,
  useState,
} from "react";

import Navbar from "../components/Layout/Navbar";

import BucketListTabs from "../components/BucketList/BucketListTabs";

import WishList from "../components/BucketList/WishList";

import VisitedList from "../components/BucketList/VisitedList";

import { BucketListContext } from "../context/BucketListContext";

const BucketListPage = () => {
  const [activeTab, setActiveTab] =
    useState("wishlist");

  const {
    wishlist,
    visited,
  } = useContext(
    BucketListContext
  );

  const totalCountries = 250;

  const coverage =
    (
      (visited.length /
        totalCountries) *
      100
    ).toFixed(2);

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <div
          className="
          bg-white
          shadow
          rounded-lg
          p-4
          mb-6
        "
        >
          <h2 className="text-xl font-bold">
            World Coverage:
            {coverage}%
          </h2>
        </div>

        <BucketListTabs
          activeTab={activeTab}
          setActiveTab={
            setActiveTab
          }
        />

        {activeTab ===
        "wishlist" ? (
          <WishList
            countries={wishlist}
          />
        ) : (
          <VisitedList
            countries={visited}
          />
        )}
      </div>
    </>
  );
};

export default BucketListPage;