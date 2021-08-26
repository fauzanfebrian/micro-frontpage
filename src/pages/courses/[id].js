import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import YouTube from "react-youtube";
import { ICCertificate, ICStudent, ICVideo } from "src/assets";
import { api } from "src/consts";
import { formatThousand } from "src/helpers";
import {
  CoursePhoto,
  Footer,
  Header,
  ItemFeature,
  RenderHappyUser,
  RenderPreview,
} from "src/parts";

function DetailCourse({ data }) {
  const [isSticky, setIsSticky] = useState(true);
  const footer = useRef(null);

  useEffect(() => {
    const stickyOffsetTop = footer?.current?.getBoundingClientRect()?.top ?? 0;

    const stickyMetaToggler = () => {
      setIsSticky(stickyOffsetTop >= window.pageYOffset + window.innerHeight);
    };

    window.addEventListener("scroll", stickyMetaToggler);

    return () => {
      window.removeEventListener("scroll", stickyMetaToggler);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Micro | {data?.name ?? "Detail Kelas"}</title>
      </Head>
      <section
        className="pt-10 relative overflow-hidden"
        style={{ height: 660 }}
      >
        {data?.chapters?.[0]?.lessons?.[0]?.video && (
          <div className="video-wrapper">
            <YouTube
              videoId={data?.chapters?.[0]?.lessons?.[0]?.video}
              id={data?.chapters?.[0]?.lessons?.[0]?.video}
              opts={{
                playerVars: {
                  loop: 1,
                  mute: 1,
                  autoPlay: 1,
                  controls: 0,
                  showinfo: 0,
                },
              }}
              onEnd={(event) => event.target.playVideo()}
              onReady={(event) => event.target.playVideo()}
            />
          </div>
        )}
        <div className="absolute z-0 inset-0 w-full h-full bg-black opacity-75" />
        <div className="meta-title absolute inset-0 z-0 w-full h-full flex justify-center items-center">
          <div className="text-center">
            <h6 className="text-white text-lg">Kelas Online!!</h6>
            <h3 className="text-teal text-6xl font-semibold mt-2">
              {data?.name ?? "Nama Kelas"}
            </h3>
          </div>
        </div>
        <div className="container mx-auto relative z-10">
          <Header />
        </div>
      </section>

      <section className="container mx-auto pt-24 relative">
        <div className="md:absolute top-0 w-full transform md:-translate-y-1/2">
          <div className="w-3/4 mx-auto">
            <div className="flex justify-between flex-wrap">
              <ItemFeature
                icon={<ICStudent className="fill-teal" />}
                value={data?.total_student ?? 0}
                title="Student"
              />
              <ItemFeature
                icon={<ICVideo className="fill-teal" />}
                value={data.total_videos ?? 0}
                title="Video"
              />
              <ItemFeature
                icon={<ICCertificate className="fill-teal" />}
                value={data.certificate === 1 ? "Tersedia" : "-"}
                title="Certificate"
              />
            </div>
          </div>
        </div>
        <div>
          <CSSTransition
            in={isSticky}
            timeout={600}
            classNames="meta-price"
            unmountOnExit
          >
            <div className="meta-price w-full bg-white left-0 py-3">
              <div className="w-full md:w-3/4 mx-auto">
                <div className="flex items-center px-3 md:px-0">
                  <div className="w-full">
                    <h2 className="text-gray-600">Nama Kelas</h2>
                    <h3 className="text-xl md:text-2xl text-gray-900">
                      {data?.name ?? "Nama Kelas"}
                    </h3>
                  </div>
                  <div className="flex flex-col md:items-center md:flex-row">
                    <h5 className="text-xl md:text-2xl text-teal whitespace-nowrap mb-1 md:mb-0 md:mr-4 text-center">
                      {data?.type === "free" ? (
                        "Free"
                      ) : (
                        <span>Rp. {formatThousand(data?.price ?? 0)}</span>
                      )}
                    </h5>
                    <a
                      href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_HOST}/joined/${data.id}`}
                      className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-nowrap  text-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.type === "free" ? "Enroll Now" : "Buy Now"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </div>
        <div className="w-3/4 mx-auto mt-8">
          <div className="w-full md:w-3/4">
            <section>
              <h5 className="font-medium text-gray-900 text-2xl mb-4">
                About <span className="text-teal">Course</span>
              </h5>
              <p className="text-gray-600 text-lg leading-relaxed mb-3">
                {data?.description ?? "About this course"}
              </p>
            </section>
            <section className="mt-10">
              <h5 className="font-medium text-gray-900 text-2xl mb-4">
                Course <span className="text-teal">Photos</span>
              </h5>

              <div className="flex flex-wrap justify-start items-center -px-4 mt-6">
                {data?.images?.length > 0 ? (
                  data.images.map((photo, index) => (
                    <CoursePhoto key={index} data={photo} />
                  ))
                ) : (
                  <div className="w-full py-12 text-center">No Item Found</div>
                )}
              </div>
            </section>
            <section className="mt-10">
              <h5 className="font-medium text-gray-900 text-2xl mb-4">
                You Will <span className="text-teal">Learn</span>
              </h5>

              {data?.chapters?.length > 0 ? (
                <RenderPreview previews={data.chapters} />
              ) : (
                <div className="w-full text-center py-12">No chapter found</div>
              )}
            </section>
            <section className="mt-10 md:w-2/3">
              <h5 className="font-medium text-gray-900 text-2xl mb-4">
                Our <span className="text-teal">Instructor</span>
              </h5>
              <div className="flex items-center">
                <img
                  src={data?.mentor?.profile ?? ""}
                  alt={`${data?.mentor?.name ?? "Mentor"} Profile Image`}
                  className="w-20 h-20 rounded-full overflow-hidden object-cover"
                />
                <div className="ml-4">
                  <h2 className="text-lg text-gray-900">
                    {data?.mentor?.name ?? "Mentor's Name"}
                  </h2>
                  <h3 className="text-gray-600 text-sm">
                    {data?.mentor?.profession ?? "Mentor's Profession"}
                  </h3>
                </div>
              </div>
            </section>
            <section className="mt-10 md:w-1/2">
              <h5 className="font-medium text-gray-900 text-2xl mb-4">
                Happy <span className="text-teal">Students</span>
              </h5>
              {data?.reviews?.length > 0 ? (
                data.reviews.map((review) => (
                  <RenderHappyUser
                    review={review}
                    key={`${review.id}-HappyUser`}
                  />
                ))
              ) : (
                <div className="w-full text-center">No Review</div>
              )}
            </section>
          </div>
        </div>
      </section>
      <section className="bg-indigo-1000 pt-12 pb-8 mt-24" ref={footer}>
        <Footer />
      </section>
    </>
  );
}

DetailCourse.getInitialProps = async ({ query }) => {
  const { id } = query;
  const data = await api.detail(id);

  return { data };
};

export default DetailCourse;
