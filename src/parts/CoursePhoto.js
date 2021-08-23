import React from "react";
import { ICToggle } from "src/assets";
import { Modal } from "src/Components";

export default function CoursePhoto({ data }) {
  return (
    <div className="w-1/3 px-4 item relative">
      <figure className="item-image">
        <ICToggle />
        <img
          src={data?.image ?? ""}
          alt={data?.image ?? "Image Detail"}
          style={{ height: 170, width: "100%" }}
        />
      </figure>
      <Modal
        content={(toggle) => (
          <img src={data?.image ?? ""} alt={data?.image ?? "Image Detail"} />
        )}
      >
        {(toggle) => <a className="link-wrapped" onClick={toggle} />}
      </Modal>
    </div>
  );
}
