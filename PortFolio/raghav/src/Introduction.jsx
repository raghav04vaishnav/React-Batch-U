import React from "react";

function Introduction({ intro }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-blue-600">
            Who I Am
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            {intro.a}
          </h2>
        </div>

        <div className="rounded-3xl border border-white bg-white/80 p-7 shadow-2xl backdrop-blur md:p-10">
          <p className="mb-7 text-lg leading-8 text-gray-700 md:text-xl">
            {intro.b}
            <span className="font-bold text-blue-600"> {intro.c}</span>
            {intro.d}
          </p>

          <p className="mb-7 text-lg leading-8 text-gray-700 md:text-xl">
            {intro.e}
          </p>

          <p className="text-lg leading-8 text-gray-700 md:text-xl">
            {intro.f}
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <div className="rounded-2xl bg-blue-50 p-5 text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="text-3xl">💻</div>
              <h3 className="mt-2 font-bold text-gray-900">Development</h3>
              <p className="mt-1 text-sm text-gray-600">Web Development</p>
            </div>

            <div className="rounded-2xl bg-purple-50 p-5 text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="text-3xl">🧠</div>
              <h3 className="mt-2 font-bold text-gray-900">Problem Solving</h3>
              <p className="mt-1 text-sm text-gray-600">Logical Thinking</p>
            </div>

            <div className="rounded-2xl bg-pink-50 p-5 text-center transition duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="text-3xl">🚀</div>
              <h3 className="mt-2 font-bold text-gray-900">Learning</h3>
              <p className="mt-1 text-sm text-gray-600">New Technologies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
