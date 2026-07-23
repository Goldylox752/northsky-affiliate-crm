export const metadata = {
  title: "Dashboard | NorthSky Affiliate CRM",
  description:
    "NorthSky Affiliate CRM command center for affiliate revenue, campaigns, analytics, and growth.",
};


const stats = [
  {
    title: "Monthly Revenue",
    value: "$8,420",
    change: "+31%",
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
    title: "Active Campaigns",
    value: "4",
    change: "Growing",
  },
];


const recentTasks = [
  {
    task: "Publish AI Tools 2026 Review",
    status: "In Progress",
  },
  {
    task: "Add Jasper Affiliate Link",
    status: "Pending",
  },
  {
    task: "Update VPN Comparison Page",
    status: "Complete",
  },
];


const topCampaigns = [
  {
    name: "AI Tools 2026",
    revenue: "$2,450",
    conversions: 96,
  },
  {
    name: "VPN Security",
    revenue: "$960",
    conversions: 42,
  },
  {
    name: "Travel eSIM Deals",
    revenue: "$620",
    conversions: 31,
  },
];


export default function DashboardPage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">


        <div className="flex justify-between items-center mb-10">


          <div>

            <h1 className="text-4xl font-bold">
              NorthSky Dashboard
            </h1>

            <p className="text-slate-400 mt-2">
              Affiliate business command center.
            </p>

          </div>


          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">
            + Quick Action
          </button>


        </div>






        <div className="grid md:grid-cols-4 gap-6">


          {stats.map((stat)=>(

            <div
              key={stat.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >

              <p className="text-slate-400">
                {stat.title}
              </p>


              <h2 className="text-3xl font-bold mt-2">
                {stat.value}
              </h2>


              <p className="text-green-400 mt-3">
                {stat.change}
              </p>


            </div>

          ))}


        </div>







        <div className="grid md:grid-cols-2 gap-6 mt-10">



          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h2 className="text-2xl font-bold">
              Revenue Overview
            </h2>


            <div className="mt-6">


              <div className="flex justify-between mb-2">

                <span>
                  Monthly Goal
                </span>

                <span>
                  $8,420 / $10,000
                </span>

              </div>


              <div className="bg-slate-800 h-4 rounded-full">


                <div
                  className="bg-blue-600 h-4 rounded-full w-[84%]"
                />


              </div>


            </div>



            <div className="grid grid-cols-3 gap-4 mt-8">


              <div className="bg-slate-800 p-4 rounded-lg">

                <p className="text-slate-400 text-sm">
                  AI
                </p>

                <p className="font-bold">
                  $2.4K
                </p>

              </div>


              <div className="bg-slate-800 p-4 rounded-lg">

                <p className="text-slate-400 text-sm">
                  VPN
                </p>

                <p className="font-bold">
                  $960
                </p>

              </div>


              <div className="bg-slate-800 p-4 rounded-lg">

                <p className="text-slate-400 text-sm">
                  Travel
                </p>

                <p className="font-bold">
                  $620
                </p>

              </div>


            </div>


          </div>








          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h2 className="text-2xl font-bold">
              Active Tasks
            </h2>


            <div className="mt-5 space-y-4">


              {recentTasks.map((task)=>(

                <div
                  key={task.task}
                  className="bg-slate-800 p-4 rounded-lg flex justify-between"
                >

                  <span>
                    {task.task}
                  </span>

                  <span className="text-slate-400 text-sm">
                    {task.status}
                  </span>


                </div>

              ))}


            </div>


          </div>


        </div>








        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-6">


          <h2 className="text-2xl font-bold">
            Top Campaign Performance
          </h2>


          <div className="grid md:grid-cols-3 gap-5 mt-6">


            {topCampaigns.map((campaign)=>(

              <div
                key={campaign.name}
                className="bg-slate-800 rounded-xl p-5"
              >

                <h3 className="font-bold text-lg">
                  {campaign.name}
                </h3>


                <p className="text-green-400 mt-3">
                  {campaign.revenue}
                </p>


                <p className="text-slate-400 mt-2">
                  {campaign.conversions} conversions
                </p>


              </div>

            ))}


          </div>


        </div>







        <div className="grid md:grid-cols-4 gap-5 mt-10">


          <a
            href="/content"
            className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-blue-500"
          >
            📝 Content
          </a>


          <a
            href="/links"
            className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-blue-500"
          >
            🔗 Links
          </a>


          <a
            href="/campaigns"
            className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-blue-500"
          >
            🚀 Campaigns
          </a>


          <a
            href="/analytics"
            className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-blue-500"
          >
            📊 Analytics
          </a>


        </div>



      </div>


    </main>

  );

}