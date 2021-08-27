import Link from "next/link";
import { useRouter } from "next/router";
import propTypes from "prop-types";
import { ILLogo, ILDefaultAvatar } from "src/assets";
import React, { useEffect, useState } from "react";

function Header({ onLight }) {
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);
  const toggleClick = () => {
    setToggle(!toggle);
    document.querySelector("#__next").classList.toggle("overflow-hidden");
  };

  useEffect(() => {
    const userCookie = JSON.parse(
      decodeURIComponent(window.document.cookie)
        ?.split(";")
        ?.find((item) => item.indexOf("BWAMICRO:user") > -1)
        ?.split("=")[1] ?? null
    );
    setUser(userCookie ?? null);
    document.querySelector("#__next").className = "";
  }, []);

  const linkColor = onLight ? "text-gray-900" : "text-white";

  const router = useRouter();
  const linkCTA =
    router.pathname.indexOf("/login") > -1
      ? `${process.env.NEXT_PUBLIC_MEMBERPAGE_HOST}/register`
      : `${process.env.NEXT_PUBLIC_MEMBERPAGE_HOST}/login`;
  const textCTA = router.pathname.indexOf("/login") > -1 ? "Register" : "Login";

  const LinkHeader = ({ title, href = "/" }) => (
    <Link href={href}>
      <a
        className={[
          linkColor,
          "hover:text-teal text-lg px-6 py-3 font-medium",
        ].join(" ")}
      >
        {title}
      </a>
    </Link>
  );

  return (
    <header
      className={
        toggle
          ? "fixed z-50 bg-indigo-1000 inset-0 pt-10"
          : "flex justify-between items-center"
      }
    >
      <div className="flex flex-1 justify-between items-center px-4">
        <ILLogo className="on-dark" />
        <div
          onClick={toggleClick}
          className={`toggle md:hidden ${toggle ? "active" : ""}`}
        />
      </div>

      <ul
        className={["md:flex items-center", toggle ? "" : "hidden"].join(" ")}
      >
        <li className="my-4 md:my-0">
          <LinkHeader title="Home" href="/" />
        </li>
        <li className="my-4 md:my-0">
          <LinkHeader title="Pricing" href="/" />
        </li>
        <li className="my-4 md:my-0">
          <LinkHeader title="Features" href="/" />
        </li>
        <li className="my-4 md:my-0">
          <LinkHeader title="Story" href="/" />
        </li>
        <li className="my-6 md:my-0">
          {user ? (
            <a
              target="_blank"
              rel="noopenner noreferrer"
              href={linkCTA}
              className="hover:bg-indigo-600 transition-all duration-200 text-white hover:text-teal text-lg px-6 py-3 font-medium ml-6 inline-flex items-center bg-indigo-900 md:bg-transparent"
            >
              <span className="rounded-full overflow-hidden mr-3 border-2 border-orange-500">
                {user?.thumbnail ? (
                  <img
                    src={user.thumbnail}
                    alt="profile"
                    className="object-cover w-8 h-8 inline-block"
                  />
                ) : (
                  <ILDefaultAvatar className="fill-indigo-500 w-8 h-8 inline-block" />
                )}
              </span>
              Hi, {user.name}
            </a>
          ) : (
            <a
              target="_blank"
              rel="noopenner noreferrer"
              href={linkCTA}
              className="bg-indigo-700 hover:bg-indigo-800 transition-all duration-200 text-white hover:text-teal text-lg px-6 py-3 font-medium ml-6"
            >
              {textCTA}
            </a>
          )}
        </li>
      </ul>
    </header>
  );
}

Header.propTypes = {
  onLight: propTypes.bool,
};

export default Header;
