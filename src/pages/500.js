import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function ServerError() {
  return (
    <>
      <Head>
        <title>Server error</title>
      </Head>
      <section className="h-screen flex flex-col items-center">
        <img src="/images/il-500.jpg" alt="oops we lost" className="-mt-10" />
        <h1 className="text-3xl text-gray-900 mt-12">Something went wrong</h1>
        <p className="text-lg text-gray-600 mt-4 text-center lg:w-3/12 xl:2/12 mx-auto mb-8">
          Mostly this cause by our server was busy, please try again later
        </p>
        <Link href="/">
          <a className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
            Back to home
          </a>
        </Link>
      </section>
    </>
  );
}
