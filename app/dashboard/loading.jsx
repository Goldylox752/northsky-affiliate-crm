export default function Loading() {

  return (

    <div className="min-h-screen bg-slate-950 text-white p-8">


      <div className="max-w-7xl mx-auto">


        <div className="mb-10">


          <div className="h-10 w-72 bg-slate-800 rounded-lg animate-pulse" />


          <div className="h-5 w-96 bg-slate-800 rounded-lg mt-4 animate-pulse" />


        </div>





        {/* Stats Loading Cards */}

        <div className="grid md:grid-cols-4 gap-6">


          {[1,2,3,4].map((item)=>(

            <div
              key={item}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >

              <div className="h-4 w-24 bg-slate-800 rounded animate-pulse" />

              <div className="h-10 w-32 bg-slate-800 rounded mt-4 animate-pulse" />

              <div className="h-4 w-16 bg-slate-800 rounded mt-4 animate-pulse" />


            </div>

          ))}


        </div>







        {/* Main Dashboard Loading */}


        <div className="grid md:grid-cols-2 gap-6 mt-10">


          {[1,2].map((item)=>(

            <div
              key={item}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >


              <div className="h-7 w-48 bg-slate-800 rounded animate-pulse" />


              <div className="h-4 w-full bg-slate-800 rounded mt-8 animate-pulse" />

              <div className="h-4 w-full bg-slate-800 rounded mt-4 animate-pulse" />

              <div className="h-4 w-3/4 bg-slate-800 rounded mt-4 animate-pulse" />


            </div>

          ))}


        </div>







        {/* Campaign Loading */}


        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-6">


          <div className="h-7 w-64 bg-slate-800 rounded animate-pulse" />



          <div className="grid md:grid-cols-3 gap-5 mt-6">


            {[1,2,3].map((item)=>(

              <div
                key={item}
                className="bg-slate-800 rounded-xl p-5"
              >

                <div className="h-5 w-40 bg-slate-700 rounded animate-pulse" />


                <div className="h-8 w-24 bg-slate-700 rounded mt-5 animate-pulse" />


                <div className="h-4 w-32 bg-slate-700 rounded mt-4 animate-pulse" />


              </div>

            ))}


          </div>


        </div>



      </div>


    </div>

  );

}