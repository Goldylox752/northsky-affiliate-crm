export const metadata = {
  title: "Campaigns | NorthSky CRM",
  description:
    "Manage NorthSky affiliate campaigns, funnels, traffic sources, and performance.",
};


const campaigns = [
  {
    name: "AI Tools 2026 Campaign",
    category: "AI Software",
    status: "Active",
    traffic: "Google SEO",
    clicks: 3840,
    conversions: 96,
    revenue: "$2,450",
  },
  {
    name: "VPN Security Campaign",
    category: "VPN",
    status: "Active",
    traffic: "Reviews + Comparisons",
    clicks: 1940,
    conversions: 42,
    revenue: "$960",
  },
  {
    name: "Travel eSIM Deals",
    category: "Travel Tech",
    status: "Growing",
    traffic: "TikTok + SEO",
    clicks: 1260,
    conversions: 31,
    revenue: "$620",
  },
  {
    name: "SaaS Business Stack",
    category: "Software",
    status: "Planning",
    traffic: "Newsletter",
    clicks: 0,
    conversions: 0,
    revenue: "$0",
  },
];


const funnel = [
  {
    stage: "Visitors",
    value: "48,920",
  },
  {
    stage: "Affiliate Clicks",
    value: "12,640",
  },
  {
    stage: "Sign Ups",
    value: "326",
  },
  {
    stage: "Revenue",
    value: "$8,420",
  },
];


export default function CampaignsPage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">


      <div className="max-w-7xl mx-auto">


        <div className="flex justify-between items-center mb-10">


          <div>

            <h1 className="text-4xl font-bold">
              Campaign Manager
            </h1>

            <p className="text-slate-400 mt-2">
              Launch and optimize NorthSky affiliate campaigns.
            </p>

          </div>


          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">
            + Create Campaign
          </button>


        </div>





        <div className="grid md:grid-cols-4 gap-6 mb-10">


          {funnel.map((item)=>(

            <div
              key={item.stage}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >

              <p className="text-slate-400">
                {item.stage}
              </p>

              <h2 className="text-3xl font-bold mt-2">
                {item.value}
              </h2>

            </div>

          ))}


        </div>







        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">


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
                  Traffic
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


                <th className="p-4">
                  Status
                </th>


              </tr>


            </thead>





            <tbody>


              {campaigns.map((campaign)=>(

                <tr
                  key={campaign.name}
                  className="border-t border-slate-800"
                >


                  <td className="p-4 font-semibold">
                    {campaign.name}
                  </td>


                  <td className="p-4 text-slate-400">
                    {campaign.category}
                  </td>


                  <td className="p-4 text-slate-400">
                    {campaign.traffic}
                  </td>


                  <td className="p-4">
                    {campaign.clicks}
                  </td>


                  <td className="p-4">
                    {campaign.conversions}
                  </td>


                  <td className="p-4 text-green-400 font-bold">
                    {campaign.revenue}
                  </td>



                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        campaign.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : campaign.status === "Growing"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >

                      {campaign.status}

                    </span>

                  </td>


                </tr>

              ))}


            </tbody>


          </table>


        </div>







        <div className="grid md:grid-cols-3 gap-6 mt-10">


          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-bold">
              Landing Pages
            </h3>

            <p className="text-slate-400 mt-3">
              AI Tools Hub
            </p>

            <p className="text-slate-400">
              VPN Comparison
            </p>

            <p className="text-slate-400">
              Travel Deals
            </p>

          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-bold">
              Promotion Channels
            </h3>

            <p className="mt-3">
              🔍 SEO
            </p>

            <p>
              📱 TikTok
            </p>

            <p>
              📰 Newsletter
            </p>

          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-bold">
              Campaign Goal
            </h3>

            <p className="text-slate-400 mt-3">
              Reach $10,000/month affiliate revenue
            </p>


            <div className="mt-5 bg-slate-800 h-3 rounded-full">

              <div className="bg-blue-600 h-3 rounded-full w-[84%]" />

            </div>


          </div>


        </div>



      </div>


    </main>

  );

}