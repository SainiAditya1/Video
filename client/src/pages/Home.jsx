import React from "react";

export default function Home() {
  return (
    <div className="px-0 py-12 max-w-2xl mx-auto">
      <h1 className="mb-4 text-gray-900 dark:text-white">
        <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Convert URLs To Engaging Video
        </span>
        <br />
        <span className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Ads In Minutes Scalable AI.
        </span>
      </h1>

      <p className="mb-4 text-slate-700">
        Increase website traffic and boost sales with videos created using rich
        templates, diverse AI avatars, and blazing-fast response.
      </p>
      <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 align-middle">
        Get started for free
      </button>
      <p className="mb-4 text-slate-700">No credit card required</p>
    </div>
  );
}
