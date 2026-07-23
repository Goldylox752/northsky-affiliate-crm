export const metadata = {
  title: "Analytics | NorthSky CRM",
  description:
    "Track NorthSky affiliate traffic, conversions, revenue analytics, and growth metrics.",
};


const metrics = [
  {
    title: "Visitors",
    value: "48,920",
    change: "+18%",
  },
  {
    title: "Affiliate Clicks",
    value: "12,640",
    change: "+24%",
  },
  {
    title: "Conversions",
    value: "326",
    change: "+12%",
  },
  {
    title: "Revenue",
    value: "$8,420",
    change: "+31%",
  },
];


const topPages = [
  {
    page: "Best AI Tools 2026",
    visitors: "14,200",
    clicks: "3,840",
    revenue: "$2,450",
  },
  {
    page: "ChatGPT vs Claude Comparison",
    visitors: "9,800",
    clicks: "2,120",
    revenue: "$1,380",
  },
  {
    page: "Best VPNs For Canada",
    visitors: "7,600",
    clicks: "1,940",
    revenue: "$960",
  },
];


const channels = [
  {
    name: "Google Search",
    traffic: "62%",
  },
  {
    name: "Reddit",
    traffic: "18%",
  },
  {
    name: "TikTok",
    traffic: "12%",
  },
  {
    name: "Direct",
    traffic: "8%",
  },
];


export default function AnalyticsPage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">


        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Measure NorthSky growth, traffic, and affiliate performance.
          </p>

        </div>





        <div className="grid md:grid-cols-4 gap-6 mb-10">


          {metrics.map((metric)=>(

            <div
              key={metric.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >

              <p className="text-slate-400">
                {metric.title}
              </p>


              <h2 className="text-3xl font-bold mt-2">
                {metric.value}
              </h2>


              <p className="text-green-400 mt-3">
                {metric.change}
              </p>


            </div>

          ))}


        </div>






        <div className="grid md:grid-cols-2 gap-6">



          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h2 className="text-2xl font-bold">
              Traffic Sources
            </h2>


            <div className="mt-6 space-y-4">


              {channels.map((channel)=>(

                <div
                  key={channel.name}
                >

                  <div className="flex justify-between mb-2">

                    <span>
                      {channel.name}
                    </span>

                    <span className="text-slate-400">
                      {channel.traffic}
                    </span>

                  </div>


                  <div className="bg-slate-800 rounded-full h-3">

                    <div
                      className="bg-blue-600 h-3 rounded-full"
                      style={{
                        width: channel.traffic
                      }}
                    />

                  </div>


                </div>

              ))}


            </div>


          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h2 className="text-2xl font-bold">
              Growth Forecast
            </h2>


            <div className="mt-6 space-y-5">


              <div>
                <p className="text-slate-400">
                  Current Monthly Revenue
                </p>

                <h3 className="text-3xl font-bold text-green-400">
                  $8,420
                </h3>
              </div>



              <div>
                <p className="text-slate-400">
                  Target Revenue
                </p>

                <h3 className="text-3xl font-bold">
                  $10,000/mo
                </h3>
              </div>



              <div className="bg-slate-800 rounded-full h-4">

                <div
                  className="bg-blue-600 h-4 rounded-full w-[84%]"
                />

              </div>


            </div>


          </div>



        </div>







        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">


          <div className="p-6">

            <h2 className="text-2xl font-bold">
              Top Performing Content
            </h2>

          </div>



          <table className="w-full">


            <thead className="bg-slate-800">

              <tr className="text-left">

                <th className="p-4">
                  Page
                </th>

                <th className="p-4">
                  Visitors
                </th>

                <th className="p-4">
                  Clicks
                </th>

                <th className="p-4">
                  Revenue
                </th>

              </tr>

            </thead>



            <tbody>


              {topPages.map((page)=>(

                <tr
                  key={page.page}
                  className="border-t border-slate-800"
                >

                  <td className="p-4 font-semibold">
                    {page.page}
                  </td>


                  <td className="p-4">
                    {page.visitors}
                  </td>


                  <td className="p-4">
                    {page.clicks}
                  </td>


                  <td className="p-4 text-green-400 font-bold">
                    {page.revenue}
                  </td>


                </tr>

              ))}


            </tbody>


          </table>


        </div>



      </div>


    </main>

  );

}