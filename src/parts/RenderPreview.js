import React from "react";

import YouTube from "react-youtube";
import { Accordion, Modal } from "src/Components";
import { ICLock, Item, ICPlay } from "src/Components/Accordion";
export default function RenderPreview({ previews }) {
  return (
    <div className="accordion">
      <Accordion>
        {(active, toggle) =>
          previews?.map((item, index) => (
            <Item
              key={`${item.id}-${index}`}
              id={item.id}
              name={item.name}
              child={item.lessons}
              toggle={toggle}
              active={active}
            >
              {item?.lessons?.length > 0 &&
                item.lessons.map((child, index2) => (
                  <div
                    className="relative hover:bg-gray-200 flex justify-between pl-8 pr-4 items-center py-2"
                    key={`${child.id}-${index2}`}
                  >
                    <span className="text-gray-600">
                      {child?.name ?? "Course Name"}
                    </span>
                    {index2 === 0 && (
                      <Modal
                        content={(toggleModal) => (
                          <YouTube
                            videoId={child?.video}
                            id={child?.video}
                            opts={{
                              playerVars: {
                                autoplay: 1,
                                controls: 1,
                                showinfo: 0,
                              },
                            }}
                          />
                        )}
                      >
                        {(toggleModal) => (
                          <span
                            className="link-wrapped"
                            onClick={toggleModal}
                          />
                        )}
                      </Modal>
                    )}
                    {index2 === 0 && (
                      <ICPlay className="fill-teal" width={20} height={20} />
                    )}
                    {!child.isPreview && index2 !== 0 && <ICLock />}
                  </div>
                ))}
            </Item>
          ))
        }
      </Accordion>
    </div>
  );
}
