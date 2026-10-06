import React from "react";

function Address({ address }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-blue-950 px-5 py-16">
      <div className="w-full max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-blue-400">
            Location
          </p>

          <h2 className="text-4xl font-extrabold text-white md:text-5xl">
            {address.a}
          </h2>
        </div>

        <div className="rounded-3xl border border-gray-700 bg-gray-900 p-8 text-center shadow-2xl md:p-12">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-4xl shadow-lg">
            📍
          </div>

          <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl">
            {address.b}
          </h3>

          <p className="text-lg leading-relaxed text-gray-300 md:text-xl">
            {address.c}
          </p>

          <div className="mt-8">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Bijainagar,Ajmer,Rajasthan,India"
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              📍 View on Map
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
