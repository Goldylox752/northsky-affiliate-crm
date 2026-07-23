import StatsCard from "@/components/StatsCard";
import DataTable from "@/components/DataTable";


export const metadata = {
  title: "Affiliate Links | NorthSky CRM",
  description:
    "Manage NorthSky affiliate links, tracking URLs, and monetization campaigns.",
};



const stats = [
  {
    title: "Total Clicks",
    value: "2,080",
    change: "+18%",
    icon: "🔗",
  },
  {
    title: "Conversions",
    value: "53",
    change: "+12%",
    icon: "📈",
  },
  {
    title: "Revenue",
    value: "$1,380",
    change: "+24%",
    icon: "💰",
  },
  {
    title: "Conversion Rate",
    value: "2.5%",
    change: "+0.4%",
    icon: "🎯",
  },
];



const affiliateLinks = [
  {
    product: "NordVPN",
    category: "VPN & Security",
    network: "Direct Affiliate",
    clicks: 1240,
    sales: 32,
    revenue: "$960",
    status: "Active",
  },
  {
    product: "Saily eSIM",
    category: "Travel Tech",
    network: "Affiliate Program",
    clicks: 840,
    sales: 21,
    revenue: "$420",
    status: "Active",
  },
  {
    product: "Jasper AI",
    category: "AI Software",
    network: "Partner Program",
    clicks: 0,
    sales: 0,
    revenue: "$0",
    status: "Pending",
  },
  {
    product: "Copy.ai",
    category: "AI Writing",
    network: "Affiliate Program",
    clicks: 0,
    sales: 0,
    revenue: "$0",
    status: "Pending",
  },
  {
    product: "Writesonic",
    category: "AI Content",
    network: "Partner Program",
    clicks: 0,
    sales: 0,
    revenue: "$0",
    status: "Pending",
  },
];



const columns = [
  {
    key: "product",
    label: "Product",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "network",
    label: "Network",
  },
  {
    key: "clicks",
    label: "Clicks",
  },
  {
    key: "sales",
    label: "Sales",
  },
  {
    key: "revenue",
    label: "Revenue",
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
          : "bg-yellow-500/20 text-yellow-400"
        }`}
      >
        {value}
      </span>
    ),
  },
];



export default function LinksPage() {


  return (

    <main className="min-h-screen bg-slate-950 text-white">


      <div className="max-w-7xl mx-auto p-8">


        {/* Header */}

        <div className="flex justify-between items-center mb-10">


          <div>

            <h1 className="text-4xl font-bold">
              Affiliate Links
            </h1>


            <p className="text-slate-400 mt-2">
              Track affiliate URLs, clicks, conversions, and revenue.
            </p>


          </div>



          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">

            + Add Link

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








        {/* Links Table */}

        <div className="mt-10">


          <DataTable
            title="Affiliate Link Manager"
            columns={columns}
            data={affiliateLinks}
          />


        </div>







        {/* Tracking Overview */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">


          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-bold">
              Best Performing Link
            </h3>


            <p className="text-3xl font-bold mt-4">
              NordVPN
            </p>


            <p className="text-green-400 mt-2">
              $960 generated
            </p>


          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-bold">
              Pending Programs
            </h3>


            <p className="text-3xl font-bold mt-4">
              3
            </p>


            <p className="text-slate-400 mt-2">
              Awaiting approval
            </p>


          </div>






          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-bold">
              Tracking Goal
            </h3>


            <p className="text-3xl font-bold mt-4 text-blue-400">
              10,000 clicks
            </p>


            <p className="text-slate-400 mt-2">
              Monthly target
            </p>


          </div>


        </div>



      </div>


    </main>

  );

}