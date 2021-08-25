import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function user() {
  const router = useRouter();
  const { name, thumbnail, path } = router.query;

  useEffect(() => {
    if (name && thumbnail && path) {
      const expires = new Date(new Date().getTime * 7 * 24 * 60 * 60 * 1000);
      const userCookie = { name, thumbnail };
      window.document.cookie = `BWAMICRO:user=${JSON.stringify(
        userCookie
      )}; expires=${expires.toUTCString()}; path=/;`;
      window.location = `${process.env.NEXT_PUBLIC_MEMBERPAGE_HOST}${path}`;
    }
  });
  if (name && thumbnail && path)
    return (
      <section className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl text-gray-900 mt-12 animate-pulse">
          Wait a minute
        </h1>
      </section>
    );
  return (
    <div>
      <section className="h-screen flex flex-col items-center">
        <img src="/images/il-404.jpg" alt="oops we lost" className="-mt-10" />
        <h1 className="text-3xl text-gray-900 mt-12">Opps! We’re lost</h1>
        <p className="text-lg text-gray-600 mt-4 text-center lg:w-3/12 xl:2/12 mx-auto mb-8">
          The page that you requested is not found in our system
        </p>
        <Link href="/">
          <a className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
            Back to home
          </a>
        </Link>
      </section>
    </div>
  );
}
