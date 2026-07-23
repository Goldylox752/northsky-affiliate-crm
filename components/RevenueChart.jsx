import StatsCard from "@/components/StatsCard";
import RevenueChart from "@/components/RevenueChart";


export const metadata = {
  title: "Revenue | NorthSky Affiliate CRM",
  description:
    "Track NorthSky affiliate earnings, commissions, conversions, and revenue performance.",
};



const stats = [
  {
    title: "Monthly Revenue",
    value: "$8,420",
    change: "+31%",
    icon: "💰",
  },
  {
    title: "Affiliate Sales",
    value: "326",
    change: "+12%",
    icon: "🛒",
  },
  {
    title: "Average Order Value",
    value: "$25.80",
    change: "+8%",
    icon: "📈",
  },
  {
    title: "Active Partners",
    value: "18",
    change: "Growing",
    icon: "🤝",
  },
];



const revenueSources = [
  {
    name: "AI Tools 2026",
    category: "AI Software",
    clicks: "3,840",
    sales: 96,
    revenue: "$2,450",
  },
  {
    name: "VPN Security",
    category: "Cyber Security",
    clicks: "1,940",
    sales: 42,
    revenue: "$960",
  },
  {
    name: "Travel eSIM Deals",
    category: "Travel Tech",
    clicks: "1,260",
    sales: 31,
    revenue: "$620",
  },
  {
    name: "SaaS Business Tools",
    category: "Software",
    clicks: "850",
    sales: 18,
    revenue: "$390",
  },
];



export default function RevenuePage() {


  return (

    <main className="min-h-screen bg-slate-950 text-white">


      <div className="max-w-7xl mx-auto p-8">



        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Revenue Dashboard
          </h1>


          <p className="text-slate-400 mt-2">
            Monitor affiliate income and monetization growth.
          </p>


        </div>






        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6">


          {stats.map((stat)=>(

            <StatsCard
              key={stat.title}
              {...stat}
            />

          ))}


        </div>







        {/* Chart */}

        <div className="mt-10">

          <RevenueChart
            title="Affiliate Revenue Growth"
          />

        </div>








        {/* Revenue Table */}


        <section className="mt-10 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">


          <div className="p-6">

            <h2 className="text-2xl font-bold">
              Revenue Sources
            </h2>

          </div>



          <table className="w-full">


            <thead className="bg-slate-800">


              <tr className="text-left">


                <th className="p-4">
                  Campaign
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


        </section>







        {/* Revenue Goals */}


        <section className="grid md:grid-cols-3 gap-6 mt-10">


          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h3 className="text-xl font-bold">
              Monthly Target
            </h3>


            <p className="text-3xl font-bold mt-4">
              $10,000
            </p>


            <p className="text-green-400 mt-2">
              84% completed
            </p>


          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h3 className="text-xl font-bold">
              Best Category
            </h3>


            <p className="text-3xl font-bold mt-4">
              AI Tools
            </p>


            <p className="text-slate-400 mt-2">
              47% of revenue
            </p>


          </div>






          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h3 className="text-xl font-bold">
              Next Milestone
            </h3>


            <p className="text-3xl font-bold mt-4 text-blue-400">
              $25K/mo
            </p>


            <p className="text-slate-400 mt-2">
              Scale affiliate campaigns
            </p>


          </div>


        </section>



      </div>


    </main>

  );

}