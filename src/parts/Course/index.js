import Link from "next/link";
import React from "react";
import RenderItem from "./RenderItem";

function Courses({ data, isall }) {
  return (
    <>
      <div className="flex justify-between items-center px-4">
        <div className="w-auto">
          <h2 className="text-gray-600 text-lg">New Classes</h2>
          <h3 className="text-gray-900 text-xl font-medium">
            Summer <span className="text-teal">Productive</span>
          </h3>
        </div>
        {!isall && (
          <div className="w-auto">
            <Link href="/courses">
              <a className="text-gray-600 hover:underline text-sm whitespace-nowrap">
                view all course
              </a>
            </Link>
          </div>
        )}
      </div>
      <div className="flex mt-6 -px-4 items-start justify-start flex-wrap">
        {data?.length > 0 ? (
          data.map((item) => <RenderItem item={item} key={item.id} />)
        ) : (
          <div className="w-full text-center -py-12 text-gray-900 text-xl">
            No Item Found!!
          </div>
        )}
      </div>
    </>
  );
}

export default Courses;
