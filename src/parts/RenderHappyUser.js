import React from "react";
import { Star } from "src/Components";

export default function RenderHappyUser({ review }) {
  return (
    <>
      <div className="mb-3 flex items-center">
        <Star rating={review?.rating ?? 0} />
      </div>
      <p className="text-lg text-gray-600">
        {review?.note ?? "Student's note"}
      </p>
      <div className="flex items-center mb-8 mt-4">
        <img
          src={review?.users?.avatar ?? ""}
          alt={`${review?.users?.name ?? "Student"} Profile Image`}
          className="w-14 h-14 rounded-full overflow-hidden object-cover"
        />
        <div className="ml-4">
          <h2 className="text-lg text-gray-900">
            {review?.users?.name ?? "Student's Name"}
          </h2>
          <h3 className="text-gray-600 text-sm">
            {review?.users?.profession ?? "Student's Profession"}
          </h3>
        </div>
      </div>
    </>
  );
}
