import React from "react";
import { formatThousand } from "src/helpers";

export default function ItemFeature({ title, value, icon }) {
  return (
    <div
      className="border border-gray-300 bg-white p-7 flex"
      style={{ width: 290 }}
    >
      {icon}
      <div className="ml-7">
        <h6 className="text-sm text-gray-600">{title}</h6>
        <h5 className="text-3xl text-gray-900">
          {typeof value === "number" ? formatThousand(value) : value}
        </h5>
      </div>
    </div>
  );
}
