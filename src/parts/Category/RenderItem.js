import Link from "next/link";
import React from "react";
import { formatThousand } from "src/helpers";

function RenderItem({ item }) {
  return (
    <div className="w-1/2 md:w-1/6 px-4 item-category mb-4">
      <div
        className="card relative transition-all duration-300 w-full"
        style={{ height: 219 }}
      >
        {item.image}
        <div className="card-meta">
          <h4 className="text-lg  transition-all duration-200 w-1/2">
            {item.name}
          </h4>
          <h5 className="text-sm capitalize">
            {formatThousand(item.total)} Courses
          </h5>
          <Link href="/#">
            <a className="link-wrapped" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RenderItem;
