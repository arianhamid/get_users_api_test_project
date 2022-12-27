import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import React from "react";

const SkeletonLoading = () => {
  return Array(6)
    .fill({})
    .map((item, index) => {
      return (
        <div className="col-4 text-center p-5">
          <Skeleton
            // key={index}
            className="mb-4"
            circle={true}
            height={100}
            width={100}
          />
          <Skeleton
            // key={Math.random()}
            className="mb-2"
            height={30}
            count={2}
          />
        </div>
      );
    });
};

export default SkeletonLoading;
