import StatsCard from "@/components/StatsCard";

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
    icon: "💰",
  },
  {
    title: "Affiliate Clicks",
    value: "12,640",
    change: "+24%",
    icon: "🔗",
  },
  {
    title: "Conversions",
    value: "326",
    change: "+12%",
    icon: "📈",
  },
  {
    title: "Active Campaigns",
    value: "4",
    change: "Growing",
    icon: "🚀",
  },
];


const tasks = [
  {
    title: "Publish AI Tools 2026 Review",
    status: "In Progress",
  },
  {
    title: "Add Jasper Affiliate Link",
    status: "Pending",
  },
  {
    title: "Update VPN Comparison Page",
    status: "Complete",
  },
];


const campaigns = [
  {
    name: "AI Tools 2026",
    revenue: "$2,450",
    conversions: 96,
    category: "AI Software",
  },
  {
    name: "VPN Security",
    revenue: "$960",
    conversions: 42,
    category: "Security",
  },
  {
    name: "Travel eSIM Deals",
    revenue: "$620",
    conversions: 31,
    category: "Travel Tech",
  },
];


export default function DashboardPage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white">


      <div className="max-w-7xl mx-auto p-8">


        {/* Header */}

        <div className="flex justify-between items-center mb-10">


          <div>

            <h1 className="text-4xl font-bold">
              NorthSky Dashboard
            </h1>


            <p className="text-slate-400 mt-2">
              Your affiliate growth command center.
            </p>

          </div>



          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">

            + Quick Action

          </button>


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







        {/* Main Panels */}


        <div className="grid md:grid-cols-2 gap-6 mt-10">


          {/* Revenue */}


          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h2 className="text-2xl font-bold">
              Revenue Overview
            </h2>



            <div className="mt-6 flex justify-between">

              <span className="text-slate-400">
                Monthly Goal
              </span>


              <span>
                $8,420 / $10,000
              </span>

            </div>




            <div className="bg-slate-800 h-4 rounded-full mt-3">


              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{
                  width:"84%"
                }}
              />


            </div>




            <div className="grid grid-cols-3 gap-4 mt-8">


              {[
                ["AI", "$2.4K"],
                ["VPN", "$960"],
                ["Travel", "$620"],
              ].map((item)=>(

                <div
                  key={item[0]}
                  className="bg-slate-800 rounded-lg p-4"
                >

                  <p className="text-slate-400 text-sm">
                    {item[0]}
                  </p>


                  <p className="font-bold mt-2">
                    {item[1]}
                  </p>


                </div>

              ))}


            </div>


          </section>







          {/* Tasks */}


          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h2 className="text-2xl font-bold">
              Active Tasks
            </h2>



            <div className="space-y-4 mt-6">


              {tasks.map((task)=>(

                <div
                  key={task.title}
                  className="bg-slate-800 rounded-lg p-4 flex justify-between"
                >

                  <span>
                    {task.title}
                  </span>


                  <span className="text-slate-400 text-sm">
                    {task.status}
                  </span>


                </div>

              ))}


            </div>


          </section>


        </div>








        {/* Campaigns */}


        <section className="mt-10">


          <h2 className="text-2xl font-bold mb-6">
            Top Campaign Performance
          </h2>



          <div className="grid md:grid-cols-3 gap-6">


            {campaigns.map((campaign)=>(

              <div
                key={campaign.name}
                className="bg-slate-900 border border-slate-800 rounded-xl p-6"
              >

                <p className="text-blue-400 text-sm">
                  {campaign.category}
                </p>


                <h3 className="text-xl font-bold mt-2">
                  {campaign.name}
                </h3>



                <p className="text-green-400 text-2xl font-bold mt-5">
                  {campaign.revenue}
                </p>



                <p className="text-slate-400 mt-2">
                  {campaign.conversions} conversions
                </p>


              </div>

            ))}


          </div>


        </section>








        {/* Quick Links */}


        <section className="grid md:grid-cols-4 gap-5 mt-10">


          {[
            ["📝 Content","/content"],
            ["🔗 Links","/links"],
            ["🚀 Campaigns","/campaigns"],
            ["📊 Analytics","/analytics"],
          ].map((item)=>(

            <a
              key={item[1]}
              href={item[1]}
              className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-blue-500 transition"
            >

              {item[0]}

            </a>

          ))}


        </section>



      </div>


    </main>

  );

}