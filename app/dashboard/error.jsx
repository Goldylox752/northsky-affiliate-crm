"use client";


import { useEffect } from "react";


export default function Error({
  error,
  reset,
}) {


  useEffect(() => {

    console.error(
      "NorthSky Dashboard Error:",
      error
    );

  }, [error]);



  return (

    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-8">


      <div className="max-w-lg w-full bg-slate-900 border border-slate-800 rounded-xl p-8 text-center">


        <div className="text-5xl mb-5">
          ⚠️
        </div>


        <h1 className="text-3xl font-bold">
          Dashboard Error
        </h1>


        <p className="text-slate-400 mt-4">
          Something went wrong while loading the NorthSky Affiliate CRM dashboard.
        </p>



        <div className="bg-slate-800 rounded-lg p-4 mt-6 text-left">


          <p className="text-sm text-slate-400">
            Error Details
          </p>


          <p className="text-sm mt-2 text-red-400 break-words">
            {error.message ||
              "Unknown error occurred"}
          </p>


        </div>






        <button
          onClick={() => reset()}
          className="mt-8 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
        >

          Try Again

        </button>





        <a
          href="/dashboard"
          className="block mt-4 bg-slate-800 hover:bg-slate-700 py-3 rounded-lg"
        >

          Return To Dashboard

        </a>



      </div>


    </main>

  );

}