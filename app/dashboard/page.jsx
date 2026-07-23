import StatsCard from "@/components/StatsCard";
import RevenueChart from "@/components/RevenueChart";
import CampaignCard from "@/components/CampaignCard";
import ActivityFeed from "@/components/ActivityFeed";


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
    category: "AI Software",
    revenue: "$2,450",
    conversions: 96,
    status: "Active",
    icon: "🤖",
  },
  {
    name: "VPN Security",
    category: "Cyber Security",
    revenue: "$960",
    conversions: 42,
    status: "Active",
    icon: "🔐",
  },
  {
    name: "Travel eSIM Deals",
    category: "Travel Tech",
    revenue: "$620",
    conversions: 31,
    status: "Growing",
    icon: "✈️",
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
              Affiliate growth command center.
            </p>


          </div>



          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">

            + Quick Action

          </button>


        </div>






        {/* KPI Stats */}

        <div className="grid md:grid-cols-4 gap-6">


          {stats.map((stat)=>(

            <StatsCard
              key={stat.title}
              {...stat}
            />

          ))}


        </div>







        {/* Revenue Analytics */}

        <div className="mt-10">

          <RevenueChart />

        </div>








        {/* Operations */}

        <div className="grid md:grid-cols-2 gap-6 mt-10">



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






          <section className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h2 className="text-2xl font-bold">
              Revenue Goal
            </h2>


            <p className="text-slate-400 mt-3">
              Monthly affiliate target
            </p>



            <div className="flex justify-between mt-6">

              <span>
                $8,420
              </span>


              <span>
                $10,000
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



            <p className="text-green-400 mt-4">
              84% completed
            </p>


          </section>



        </div>








        {/* Campaign Performance */}

        <section className="mt-10">


          <h2 className="text-2xl font-bold mb-6">
            Top Campaign Performance
          </h2>



          <div className="grid md:grid-cols-3 gap-6">


            {campaigns.map((campaign)=>(

              <CampaignCard
                key={campaign.name}
                {...campaign}
              />

            ))}


          </div>


        </section>








        {/* Activity */}

        <section className="mt-10">

          <ActivityFeed />

        </section>







        {/* Quick Actions */}

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