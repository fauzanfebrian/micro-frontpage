import React, { useState } from "react";

function Hero() {
  const [email, setEmail] = useState("");
  const submit = () => {
    email &&
      window.open(
        `${process.env.NEXT_PUBLIC_MEMBERPAGE_HOST}/register?email=${email}`
      );
  };
  return (
    <div className="flex px-4 justify-between items-center">
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-white mb-5 font-semibold text-5xl">
          <span className="text-teal">The New</span> Way To
          <br className="hidden md:block" /> Achieve Good{" "}
          <span className="text-teal">Skills</span>
        </h1>
        <p className="text-white text-lg mb-8 font-light">
          We provide tons of pathskill that you
          <br />
          can choose and focus on
        </p>

        <form className="flex w-full md:w-3/4" onSubmit={submit}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="bg-white focus:outline-none border-0 px-4 md:px-6 py-3 w-full md:w-1/2"
            placeholder="Your email address"
            required
          />
          <button className="bg-orange-500 hover:bg-orange-400 trans≈ition-all duration-200 focus:outline-none shadow-inner text-white px-4 md:px-6 py-3 whitespace-nowrap">
            Register Now
          </button>
        </form>
      </div>
      <div className="hidden w-1/2 md:flex justify-end pt-24 pr-16">
        <div className="relative" style={{ width: 369, height: 440 }}>
          <div
            className="absolute border-indigo-700 border-2 -mt-12 -mr-6 right-0"
            style={{ width: 324, height: 374 }}
          />
          <div className="absolute w-full h-full -mb-8 -ml-8">
            <img src="images/image-hero.png" alt="Image Hero" />
          </div>
          <div
            className="absolute bg-white z-10 py-3 px-4 mt-24 -ml-5"
            style={{ width: 290, transform: "translateX(-50%)" }}
          >
            <p className="text-gray-900 mb-2">
              Metode belajar yang santai seperti nonton drakor di Netflix
            </p>
            <span className="text-gray-600">Alyssa, Apps Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
