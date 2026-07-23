import StatsCard from "@/components/StatsCard";
import DataTable from "@/components/DataTable";


export const metadata = {
  title: "Networks | NorthSky Affiliate CRM",
  description:
    "Manage affiliate networks, partners, commissions, and programs inside NorthSky CRM.",
};



const stats = [
  {
    title: "Active Networks",
    value: "12",
    change: "+3 this month",
    icon: "🤝",
  },
  {
    title: "Affiliate Programs",
    value: "48",
    change: "+8%",
    icon: "📦",
  },
  {
    title: "Average Commission",
    value: "24%",
    change: "+5%",
    icon: "💰",
  },
  {
    title: "Pending Approvals",
    value: "6",
    change: "Review",
    icon: "⏳",
  },
];



const networks = [
  {
    name: "Impact",
    category: "SaaS & Technology",
    programs: 24,
    commission: "20-40%",
    status: "Active",
  },
  {
    name: "PartnerStack",
    category: "B2B Software",
    programs: 18,
    commission: "Recurring",
    status: "Active",
  },
  {
    name: "CJ Affiliate",
    category: "Retail & Tech",
    programs: 32,
    commission: "Variable",
    status: "Active",
  },
  {
    name: "ShareASale",
    category: "Ecommerce",
    programs: 14,
    commission: "10-25%",
    status: "Pending",
  },
];



const columns = [
  {
    key: "name",
    label: "Network",
  },
  {
    key: "category",
    label: "Category",
  },
  {
    key: "programs",
    label: "Programs",
  },
  {
    key: "commission",
    label: "Commission",
  },
  {
    key: "status",
    label: "Status",
    render:(value)=>(
      <span className="px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
        {value}
      </span>
    ),
  },
];



export default function NetworksPage() {


  return (

    <main className="min-h-screen bg-slate-950 text-white">


      <div className="max-w-7xl mx-auto p-8">



        {/* Header */}

        <div className="flex justify-between items-center mb-10">


          <div>

            <h1 className="text-4xl font-bold">
              Affiliate Networks
            </h1>


            <p className="text-slate-400 mt-2">
              Manage partners, programs, and affiliate relationships.
            </p>

          </div>



          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">
            + Add Network
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







        {/* Table */}

        <div className="mt-10">


          <DataTable
            title="Affiliate Network Directory"
            columns={columns}
            data={networks}
          />


        </div>







        {/* Growth Section */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">


          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-bold">
              Best Performing Network
            </h3>

            <p className="text-3xl font-bold mt-4">
              Impact
            </p>

            <p className="text-green-400 mt-2">
              Highest conversions
            </p>

          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-bold">
              Monthly Partners
            </h3>

            <p className="text-3xl font-bold mt-4">
              48
            </p>

            <p className="text-slate-400 mt-2">
              Programs available
            </p>

          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="text-xl font-bold">
              Next Goal
            </h3>

            <p className="text-3xl font-bold mt-4 text-blue-400">
              100 Partners
            </p>

            <p className="text-slate-400 mt-2">
              Scale affiliate portfolio
            </p>

          </div>


        </div>



      </div>


    </main>

  );

}