import React from "react";

function Qualification({ quali }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950 px-5 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-purple-400">
            Education
          </p>

          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            {quali.a}
          </h2>
        </div>

        <div className="space-y-7">
          <div className="rounded-2xl border border-gray-700 bg-gray-900 p-7 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-blue-500">
            <div className="mb-4 flex items-center gap-4">
              <span className="rounded-xl bg-blue-600 p-3 text-2xl">🎓</span>

              <h3 className="text-xl font-bold text-white md:text-2xl">
                {quali.b}
              </h3>
            </div>

            <p className="text-gray-300">{quali.c}</p>

            <p className="mt-2 font-semibold text-blue-400">{quali.d}</p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-900 p-7 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500">
            <div className="mb-4 flex items-center gap-4">
              <span className="rounded-xl bg-purple-600 p-3 text-2xl">📚</span>

              <h3 className="text-xl font-bold text-white md:text-2xl">
                {quali.e}
              </h3>
            </div>

            <p className="text-gray-300">{quali.f}</p>

            <p className="mt-2 font-semibold text-purple-400">{quali.g}</p>
          </div>

          <div className="rounded-2xl border border-gray-700 bg-gray-900 p-7 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-green-500">
            <div className="mb-4 flex items-center gap-4">
              <span className="rounded-xl bg-green-600 p-3 text-2xl">📝</span>

              <h3 className="text-xl font-bold text-white md:text-2xl">
                {quali.h}
              </h3>
            </div>

            <p className="text-gray-300">{quali.i}</p>

            <p className="mt-2 font-semibold text-green-400">{quali.j}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
