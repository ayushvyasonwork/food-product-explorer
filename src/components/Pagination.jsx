import React from "react";

const Pagination = ({ onLoadMore, hasMore }) => {
  return (
    <div className="text-center mt-4">
      {hasMore ? (
        <button
          onClick={onLoadMore}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      ) : (
        <p className="text-gray-500">No more products to load.</p>
      )}
    </div>
  );
};

export default Pagination;
