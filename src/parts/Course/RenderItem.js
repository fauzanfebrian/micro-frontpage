import React from "react";
import Link from "next/link";
import { ICPlay } from "src/assets";

function RenderItem({ item }) {
  return (
    <div className="w-1/4 px-4 item relative mb-3">
      <figure className="item-image">
        <ICPlay />
        <img
          src={item?.thumbnail ?? ""}
          alt={`Image ${item?.name ?? "Name"}`}
          style={{ height: 170, width: "100%" }}
        />
      </figure>
      <h4 className="text-lg text-gray-900 mt-3 capitalize">
        {item?.name ?? "Course Name"}
      </h4>
      <h3 className="text-gray-600 capitalize">
        {item?.level ?? "course level"}
      </h3>
      <Link href="/courses/[slug]" as={`/courses/${item?.id ?? ""}`}>
        <a className="link-wrapped" />
      </Link>
    </div>
  );
}

export default RenderItem;
