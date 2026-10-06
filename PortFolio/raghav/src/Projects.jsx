import React from "react";

function Projects({ projects }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-blue-600">
            My Work
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            {projects.a}
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          <div className="group overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-3">
            <div className="flex h-36 items-center justify-center bg-gradient-to-r from-orange-400 to-red-500 text-6xl">
              🛵
            </div>

            <div className="p-7">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {projects.b}
              </h3>

              <p className="mb-5 text-gray-600">
                A food delivery web application inspired by modern food ordering
                platforms.
              </p>

              <button className="rounded-lg bg-gray-900 px-5 py-2 font-semibold text-white transition hover:bg-blue-600">
                View Project
              </button>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-3">
            <div className="flex h-36 items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-6xl">
              🎓
            </div>

            <div className="p-7">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {projects.c}
              </h3>

              <p className="mb-5 text-gray-600">
                A dashboard application designed for managing student
                information efficiently.
              </p>

              <button className="rounded-lg bg-gray-900 px-5 py-2 font-semibold text-white transition hover:bg-blue-600">
                View Project
              </button>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl bg-white shadow-xl transition duration-300 hover:-translate-y-3">
            <div className="flex h-36 items-center justify-center bg-gradient-to-r from-green-400 to-teal-500 text-6xl">
              ✅
            </div>

            <div className="p-7">
              <h3 className="mb-3 text-2xl font-bold text-gray-900">
                {projects.d}
              </h3>

              <p className="mb-5 text-gray-600">
                A simple and responsive Todo application for managing daily
                tasks.
              </p>

              <button className="rounded-lg bg-gray-900 px-5 py-2 font-semibold text-white transition hover:bg-blue-600">
                View Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
