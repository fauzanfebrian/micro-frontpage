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
    <div className="flex justify-between items-center">
      <div className="w-1/2">
        <h1 className="text-5xl text-white mb-5">
          <span className="text-teal font-semibold">The New</span> Way To
          <br /> Achieve Good{" "}
          <span className="text-teal font-semibold">Skills</span>
        </h1>
        <p className="text-white text-lg mb-8 font-light">
          We provide tons of pathskill that you
          <br />
          can choose and focus on
        </p>

        <form onSubmit={submit}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="bg-white focus:outline-none border-0 px-6 py-3"
            placeholder="Your email address"
            required
          />
          <button className="bg-orange-500 hover:bg-orange-400 transition-all duration-200 focus:outline-none shadow-inner text-white px-6 py-3">
            Register Now
          </button>
        </form>
      </div>
      <div className="w-1/2 flex justify-end pt-24 pr-16">
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
