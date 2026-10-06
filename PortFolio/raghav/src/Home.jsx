import React from "react";

function Home({ home }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-5 py-20 text-center">
      <div className="max-w-5xl">
        <div className="mb-10 overflow-hidden rounded-full border border-gray-700 bg-gray-900/70 px-6 py-4 shadow-xl">
          <marquee className="text-lg font-medium text-gray-300 md:text-2xl">
            {home.a}
          </marquee>
        </div>

        <p className="mb-4 text-lg font-medium text-blue-400">
          Welcome to my portfolio
        </p>

        <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-6xl">
          {home.b}
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {home.c}
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-xl leading-relaxed text-gray-300 md:text-2xl">
          {home.d}
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/projects"
            className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="rounded-xl border border-gray-600 bg-gray-800 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-gray-700"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
