const BucketListTabs = ({
  activeTab,
  setActiveTab,
}) => {
  return (
    <div className="flex gap-4 mb-6">
      <button
        onClick={() =>
          setActiveTab(
            "wishlist"
          )
        }
        className={`px-4 py-2 rounded-lg ${
          activeTab ===
          "wishlist"
            ? "bg-blue-600 text-white"
            : "bg-gray-200"
        }`}
      >
        Wishlist
      </button>

      <button
        onClick={() =>
          setActiveTab(
            "visited"
          )
        }
        className={`px-4 py-2 rounded-lg ${
          activeTab ===
          "visited"
            ? "bg-green-600 text-white"
            : "bg-gray-200"
        }`}
      >
        Visited
      </button>
    </div>
  );
};

export default BucketListTabs;