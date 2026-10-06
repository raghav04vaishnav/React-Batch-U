import React from "react";

function Skill({ skills }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-blue-400">
            My Expertise
          </p>

          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            Skills
          </h2>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group rounded-2xl border border-gray-700 bg-gray-900 p-7 text-center shadow-xl transition duration-300 hover:-translate-y-3 hover:border-blue-500">
            <div className="mb-5 text-5xl">💻</div>
            <h2 className="mb-3 text-2xl font-bold text-white">{skills.a}</h2>
            <p className="text-gray-400">{skills.b}</p>
          </div>

          <div className="group rounded-2xl border border-gray-700 bg-gray-900 p-7 text-center shadow-xl transition duration-300 hover:-translate-y-3 hover:border-purple-500">
            <div className="mb-5 text-5xl">🌐</div>
            <h2 className="mb-3 text-2xl font-bold text-white">{skills.c}</h2>
            <p className="text-gray-400">{skills.d}</p>
          </div>

          <div className="group rounded-2xl border border-gray-700 bg-gray-900 p-7 text-center shadow-xl transition duration-300 hover:-translate-y-3 hover:border-green-500">
            <div className="mb-5 text-5xl">🧠</div>
            <h2 className="mb-3 text-2xl font-bold text-white">{skills.e}</h2>
            <p className="text-gray-400">{skills.f}</p>
          </div>

          <div className="group rounded-2xl border border-gray-700 bg-gray-900 p-7 text-center shadow-xl transition duration-300 hover:-translate-y-3 hover:border-yellow-500">
            <div className="mb-5 text-5xl">🛠️</div>
            <h2 className="mb-3 text-2xl font-bold text-white">{skills.g}</h2>
            <p className="text-gray-400">{skills.h}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skill;
