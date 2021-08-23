import {
  ILCatAdvertisement,
  ILCatBusiness,
  ILCatContent,
  ILCatCustomer,
  ILCatGame,
  ILCatTravel,
} from "src/assets";
import React from "react";
import RenderItem from "./RenderItem";

function Courses() {
  const data = [
    {
      name: "Business Development",
      total: 12493,
      image: <ILCatBusiness />,
    },
    {
      name: "Content Writer",
      total: 839,
      image: <ILCatContent />,
    },
    {
      name: "Product Advertisement",
      total: 476,
      image: <ILCatAdvertisement />,
    },
    {
      name: "Customer Relationship",
      total: 564,
      image: <ILCatCustomer />,
    },
    {
      name: "Game Development",
      total: 839,
      image: <ILCatGame />,
    },
    {
      name: "Travel Guidance",
      total: 73,
      image: <ILCatTravel />,
    },
  ];
  return (
    <>
      <div className="flex items-center">
        <div className="w-auto">
          <h2 className="text-gray-600 text-lg">Category</h2>
          <h3 className="text-gray-900 text-xl font-medium">
            Explore & <span className="text-teal">Learn</span>
          </h3>
        </div>
      </div>
      <div className="flex mt-6 -mx-4 items-start justify-start">
        {data.map((item, index) => (
          <RenderItem item={item} key={index} />
        ))}
      </div>
    </>
  );
}

export default Courses;
