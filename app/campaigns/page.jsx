import StatsCard from "@/components/StatsCard";
import DataTable from "@/components/DataTable";


export const metadata = {
  title: "Campaigns | NorthSky CRM",
  description:
    "Manage NorthSky affiliate campaigns, funnels, traffic sources, and performance.",
};



const stats = [
  {
    title: "Active Campaigns",
    value: "3",
    change: "+1 this month",
    icon: "🚀",
  },
  {
    title: "Total Clicks",
    value: "7,040",
    change: "+24%",
    icon: "🔗",
  },
  {
    title: "Conversions",
    value: "169",
    change: "+18%",
    icon: "📈",
  },
  {
    title: "Campaign Revenue",
    value: "$4,030",
    change: "+31%",
    icon: "💰",
  },
];



const campaigns = [
  {
    name: "AI Tools 2026 Campaign",
    category: "AI Software",
    traffic: "Google SEO",
    clicks: "3,840",
    conversions: 96,
    revenue: "$2,450",
    status: "Active",
  },
  {
    name: "VPN Security Campaign",
    category: "VPN",
    traffic: "Reviews + Comparisons",
    clicks: "1,940",
    conversions: 42,
    revenue: "$960",
    status: "Active",
  },
  {
    name: "Travel eSIM Deals",
    category: "Travel Tech",
    traffic: "TikTok + SEO",
    clicks: "1,260",
    conversions: 31,
    revenue: "$620",
    status: "Growing",
  },
  {
    name: "SaaS Business Stack",
    category: "Software",
    traffic: "Newsletter",
    clicks: "0",
    conversions: 0,
    revenue: "$0",
    status: "Planning",
  },
];



const columns = [
  {
    key:"name",
    label:"Campaign",
  },
  {
    key:"category",
    label:"Category",
  },
  {
    key:"traffic",
    label:"Traffic Source",
  },
  {
    key:"clicks",
    label:"Clicks",
  },
  {
    key:"conversions",
    label:"Sales",
  },
  {
    key:"revenue",
    label:"Revenue",
    render:(value)=>(
      <span className="text-green-400 font-bold">
        {value}
      </span>
    ),
  },
  {
    key:"status",
    label:"Status",
    render:(value)=>(
      <span
        className={`px-3 py-1 rounded-full text-xs ${
          value === "Active"
          ? "bg-green-500/20 text-green-400"
          : value === "Growing"
          ? "bg-blue-500/20 text-blue-400"
          : "bg-yellow-500/20 text-yellow-400"
        }`}
      >
        {value}
      </span>
    ),
  },
];



export default function CampaignsPage() {


  return (

    <main className="min-h-screen bg-slate-950 text-white">


      <div className="max-w-7xl mx-auto p-8">



        {/* Header */}

        <div className="flex justify-between items-center mb-10">


          <div>

            <h1 className="text-4xl font-bold">
              Campaign Manager
            </h1>


            <p className="text-slate-400 mt-2">
              Launch, track, and optimize affiliate campaigns.
            </p>


          </div>



          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">

            + Create Campaign

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








        {/* Campaign Table */}

        <div className="mt-10">


          <DataTable
            title="Campaign Performance"
            columns={columns}
            data={campaigns}
          />


        </div>








        {/* Campaign Intelligence */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">



          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h3 className="text-xl font-bold">
              Landing Pages
            </h3>


            <div className="mt-4 space-y-2 text-slate-400">

              <p>AI Tools Hub</p>
              <p>VPN Comparison</p>
              <p>Travel Deals</p>

            </div>


          </div>








          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h3 className="text-xl font-bold">
              Promotion Channels
            </h3>


            <div className="mt-4 space-y-2">

              <p>🔍 SEO</p>
              <p>📱 TikTok</p>
              <p>📰 Newsletter</p>

            </div>


          </div>








          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h3 className="text-xl font-bold">
              Monthly Goal
            </h3>


            <p className="text-3xl font-bold mt-4 text-blue-400">
              $10K/mo
            </p>


            <p className="text-slate-400 mt-2">
              Affiliate revenue target
            </p>



            <div className="bg-slate-800 h-3 rounded-full mt-5">


              <div
                className="bg-blue-600 h-3 rounded-full"
                style={{
                  width:"84%"
                }}
              />


            </div>


          </div>



        </div>



      </div>


    </main>

  );

}