import React from "react";

function Contact({ contacts }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 px-5 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 font-semibold uppercase tracking-widest text-blue-600">
            Get In Touch
          </p>

          <h2 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            {contacts.a}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-7 shadow-xl transition duration-300 hover:-translate-y-2">
            <div className="mb-4 text-4xl">📱</div>
            <h3 className="mb-2 text-xl font-bold">{contacts.b}</h3>
            <p className="text-lg text-gray-600">{contacts.c}</p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-xl transition duration-300 hover:-translate-y-2">
            <div className="mb-4 text-4xl">📧</div>
            <h3 className="mb-2 text-xl font-bold">{contacts.d}</h3>
            <p className="break-all text-lg text-gray-600">{contacts.e}</p>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-xl transition duration-300 hover:-translate-y-2">
            <div className="mb-4 text-4xl">💼</div>
            <h3 className="mb-2 text-xl font-bold">{contacts.f}</h3>
            <a
              href={`https://${contacts.g}`}
              target="_blank"
              rel="noreferrer"
              className="break-all text-lg text-blue-600 hover:underline"
            >
              {contacts.g}
            </a>
          </div>

          <div className="rounded-2xl bg-white p-7 shadow-xl transition duration-300 hover:-translate-y-2">
            <div className="mb-4 text-4xl">🐙</div>
            <h3 className="mb-2 text-xl font-bold">{contacts.h}</h3>
            <a
              href={`https://${contacts.i}`}
              target="_blank"
              rel="noreferrer"
              className="break-all text-lg text-gray-700 hover:text-blue-600"
            >
              {contacts.i}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
