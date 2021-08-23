import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { api } from "src/consts";
import { Course, Footer, Header } from "src/parts";

function Courses({ data }) {
  const [search, setSearch] = useState("");
  const [searchFocus, setSearchFocus] = useState(false);
  const [searchResponse, setSearchResponse] = useState({
    isLoading: false,
    isError: false,
    data: [],
  });

  const selectWrapper = useRef(null);
  const clickOutside = (event) => {
    if (selectWrapper && !selectWrapper.current.contains(event.target)) {
      setSearch("");
    }
  };

  let timeoutSearch = useRef(null);
  const handleSearch = (e) => {
    try {
      e.persist();
      setSearch(e.target.value);
      clearTimeout(timeoutSearch.current);
      timeoutSearch.current = setTimeout(async () => {
        setSearchResponse({ isError: true, isLoading: true, data: null });
        const res = await api.all({ params: { q: e.target.value } });
        setSearchResponse({
          isLoading: false,
          isError: false,
          data: res.data,
        });
      }, 1000);
    } catch (error) {
      setSearchResponse({
        isLoading: false,
        isError: true,
        data: null,
      });
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", clickOutside);

    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Micro | All Courses</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="pt-10 z-30 relative" style={{ height: 360 }}>
        <div className="absolute inset-0 z-0 w-full h-full bg-black opacity-75" />
        <div
          className="meta-title absolute bottom-0 object-fill z-0 w-full flex justify-center items-center"
          style={{ marginBottom: "-25px" }}
        >
          <div>
            <h3 className="text-6xl text-teal font-semibold text-center mb-4">
              Library
            </h3>
            <h4 className="text-lg text-center text-white">
              Jangan mau kalah update dengan yang lainnya, <br /> Yuk ikuti
              perkembangan teknologi
            </h4>
            <div className="flex flex-col relative" ref={selectWrapper}>
              <input
                type="text"
                className="bg-white focus:outline-none transition-colors duration-300 border focus:border-teal border-gray-600 px-4 py-3 w-full mt-6"
                value={search}
                onChange={handleSearch}
                onFocus={() => setSearchFocus(!searchFocus)}
                onBlur={() => setSearchFocus(!searchFocus)}
                placeholder={
                  searchFocus
                    ? "Ketik minimal 3 karakter untuk mencari"
                    : "Lagi mencari kelas apa?"
                }
              />
              {search.length >= 3 && (
                <div
                  className="flex flex-col absolute py-2 px-4 bg-white border border-gray-600 w-full"
                  style={{ top: 75 }}
                >
                  {searchResponse.isLoading ? (
                    "Loading..."
                  ) : (
                    <>
                      {searchResponse.isError && "Something technically wrong"}
                      {searchResponse?.data?.length > 0
                        ? searchResponse?.data?.map((item, index) => {
                            return (
                              <div
                                className="flex items-center -mx-4 py-2 cursor-pointer hover:bg-gray-200 relative"
                                key={index}
                              >
                                <div
                                  className="w-auto px-4"
                                  style={{ width: 150 }}
                                >
                                  <img
                                    src={item?.thumbnail ?? ""}
                                    alt={item?.name ?? "thumbnail course"}
                                  />
                                </div>
                                <div className="w-full px-4">
                                  <h6 className="text-gray-900 text-lg">
                                    {item?.name ?? "Course name"}
                                  </h6>
                                  <p className="text-gray-600">
                                    {item?.level ?? "Level course"}
                                  </p>
                                </div>
                                <Link
                                  href="/courses/[id]"
                                  as={`/courses/${item.id}`}
                                >
                                  <a className="link-wrapped" />
                                </Link>
                              </div>
                            );
                          })
                        : "No course found"}
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="container mx-auto z-10 relative">
          <Header />
        </div>
      </section>
      <section className="mx-auto mt-24 container">
        <Course data={data} />
      </section>
      <section className="px-24 bg-indigo-1000 pt-12 pb-8 mt-24">
        <Footer />
      </section>
    </>
  );
}

Courses.getInitialProps = async () => {
  try {
    const res = await api.all();
    const { data } = res;

    return { data };
  } catch (error) {}
};

export default Courses;
