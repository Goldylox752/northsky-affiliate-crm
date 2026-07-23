import Link from "next/link";

export const metadata = {
  title: "Revenue Dashboard | NorthSky CRM",
  description:
    "Track NorthSky affiliate revenue, commissions, conversions, and monetization performance.",
};


const revenueSources = [
  {
    name: "NordVPN",
    category: "VPN & Security",
    clicks: 1240,
    sales: 32,
    revenue: "$960",
  },
  {
    name: "Saily eSIM",
    category: "Travel Tech",
    clicks: 840,
    sales: 21,
    revenue: "$420",
  },
  {
    name: "AI Software",
    category: "AI Tools",
    clicks: 2100,
    sales: 45,
    revenue: "$1,850",
  },
  {
    name: "SaaS Partners",
    category: "Business Software",
    clicks: 950,
    sales: 18,
    revenue: "$720",
  },
];


export default function RevenuePage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">


      <div className="max-w-7xl mx-auto">


        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Revenue Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Monitor NorthSky affiliate earnings and growth.
          </p>

        </div>




        <div className="grid md:grid-cols-4 gap-6 mb-10">


          <div className="bg-slate-900 rounded-xl p-6">

            <p className="text-slate-400">
              Monthly Revenue
            </p>

            <h2 className="text-3xl font-bold text-green-400">
              $3,950
            </h2>

          </div>



          <div className="bg-slate-900 rounded-xl p-6">

            <p className="text-slate-400">
              Total Clicks
            </p>

            <h2 className="text-3xl font-bold">
              5,130
            </h2>

          </div>




          <div className="bg-slate-900 rounded-xl p-6">

            <p className="text-slate-400">
              Conversions
            </p>

            <h2 className="text-3xl font-bold">
              116
            </h2>

          </div>




          <div className="bg-slate-900 rounded-xl p-6">

            <p className="text-slate-400">
              Conversion Rate
            </p>

            <h2 className="text-3xl font-bold">
              2.26%
            </h2>

          </div>


        </div>





        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">


          <div className="p-6">

            <h2 className="text-2xl font-bold">
              Revenue Sources
            </h2>

          </div>



          <table className="w-full">


            <thead className="bg-slate-800">


              <tr className="text-left">

                <th className="p-4">
                  Partner
                </th>

                <th className="p-4">
                  Category
                </th>

                <th className="p-4">
                  Clicks
                </th>

                <th className="p-4">
                  Sales
                </th>

                <th className="p-4">
                  Revenue
                </th>

              </tr>


            </thead>




            <tbody>


              {revenueSources.map((source)=>(

                <tr
                  key={source.name}
                  className="border-t border-slate-800"
                >

                  <td className="p-4 font-semibold">
                    {source.name}
                  </td>


                  <td className="p-4 text-slate-400">
                    {source.category}
                  </td>


                  <td className="p-4">
                    {source.clicks}
                  </td>


                  <td className="p-4">
                    {source.sales}
                  </td>


                  <td className="p-4 text-green-400 font-bold">
                    {source.revenue}
                  </td>


                </tr>

              ))}


            </tbody>


          </table>


        </div>







        <div className="grid md:grid-cols-3 gap-6 mt-10">


          <div className="bg-slate-900 rounded-xl p-6">

            <h3 className="font-bold text-xl">
              Top Revenue Page
            </h3>

            <p className="text-slate-400 mt-3">
              Best AI Tools 2026
            </p>

            <p className="text-green-400 mt-2">
              $1,250 generated
            </p>

          </div>




          <div className="bg-slate-900 rounded-xl p-6">

            <h3 className="font-bold text-xl">
              Best Category
            </h3>

            <p className="text-slate-400 mt-3">
              AI Software
            </p>

            <p className="text-green-400 mt-2">
              47% of revenue
            </p>

          </div>





          <div className="bg-slate-900 rounded-xl p-6">

            <h3 className="font-bold text-xl">
              Growth Goal
            </h3>

            <p className="text-slate-400 mt-3">
              $10,000/month affiliate income
            </p>

            <div className="mt-4 bg-slate-800 rounded-full h-3">

              <div className="bg-blue-600 h-3 rounded-full w-[40%]" />

            </div>

          </div>


        </div>



      </div>


    </main>

  );

}