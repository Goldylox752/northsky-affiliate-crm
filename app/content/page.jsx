import StatsCard from "@/components/StatsCard";
import DataTable from "@/components/DataTable";


export const metadata = {
  title: "Content Manager | NorthSky CRM",
  description:
    "Manage NorthSky affiliate content, reviews, comparisons, and SEO campaigns.",
};



const stats = [
  {
    title: "Published Articles",
    value: "27",
    change: "+5 this month",
    icon: "📝",
  },
  {
    title: "Monthly Traffic",
    value: "23.6K",
    change: "+18%",
    icon: "📊",
  },
  {
    title: "Content Revenue",
    value: "$2,170",
    change: "+24%",
    icon: "💰",
  },
  {
    title: "SEO Opportunities",
    value: "42",
    change: "Growing",
    icon: "🔍",
  },
];



const content = [
  {
    title: "Best AI Tools 2026",
    type: "Ranking Article",
    category: "AI Software",
    status: "Published",
    traffic: "12,400",
    revenue: "$1,250",
  },
  {
    title: "ChatGPT vs Jasper vs Copy.ai",
    type: "Comparison",
    category: "AI Reviews",
    status: "Published",
    traffic: "8,900",
    revenue: "$740",
  },
  {
    title: "Best VPNs for Travel 2026",
    type: "Affiliate Review",
    category: "VPN & Security",
    status: "Draft",
    traffic: "0",
    revenue: "$0",
  },
  {
    title: "Best eSIM Providers Canada",
    type: "Buyer Guide",
    category: "Travel Tech",
    status: "In Progress",
    traffic: "2,300",
    revenue: "$180",
  },
  {
    title: "Top SaaS Tools For Small Business",
    type: "Listicle",
    category: "Business Software",
    status: "Planning",
    traffic: "0",
    revenue: "$0",
  },
];



const columns = [
  {
    key:"title",
    label:"Article",
  },
  {
    key:"type",
    label:"Type",
  },
  {
    key:"category",
    label:"Category",
  },
  {
    key:"traffic",
    label:"Traffic",
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
          value === "Published"
          ? "bg-green-500/20 text-green-400"
          : value === "Draft"
          ? "bg-yellow-500/20 text-yellow-400"
          : "bg-blue-500/20 text-blue-400"
        }`}
      >
        {value}
      </span>
    ),
  },
];



export default function ContentPage() {


  return (

    <main className="min-h-screen bg-slate-950 text-white">


      <div className="max-w-7xl mx-auto p-8">



        {/* Header */}

        <div className="flex justify-between items-center mb-10">


          <div>

            <h1 className="text-4xl font-bold">
              Content Manager
            </h1>


            <p className="text-slate-400 mt-2">
              Create, optimize, and monetize affiliate content.
            </p>


          </div>



          <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg">

            + New Article

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







        {/* Content Table */}

        <div className="mt-10">


          <DataTable
            title="Content Library"
            columns={columns}
            data={content}
          />


        </div>








        {/* AI Pipeline */}

        <section className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-6">


          <h2 className="text-2xl font-bold">
            AI Content Pipeline
          </h2>



          <div className="grid md:grid-cols-4 gap-5 mt-6">


            {[
              ["💡 Ideas","42"],
              ["✍️ Writing","8"],
              ["🚀 Published","27"],
              ["💰 Revenue Pages","14"],
            ].map((item)=>(


              <div
                key={item[0]}
                className="bg-slate-800 rounded-lg p-5"
              >

                <p className="text-slate-400">
                  {item[0]}
                </p>


                <h3 className="text-3xl font-bold mt-2">
                  {item[1]}
                </h3>


              </div>


            ))}


          </div>


        </section>







        {/* SEO Automation */}

        <section className="grid md:grid-cols-3 gap-6 mt-10">


          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="font-bold text-xl">
              Keyword Opportunities
            </h3>

            <p className="text-3xl font-bold mt-4">
              186
            </p>

            <p className="text-green-400 mt-2">
              Ready for content
            </p>

          </div>




          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="font-bold text-xl">
              AI Generated Drafts
            </h3>

            <p className="text-3xl font-bold mt-4">
              34
            </p>

            <p className="text-slate-400 mt-2">
              Waiting review
            </p>

          </div>




          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">

            <h3 className="font-bold text-xl">
              Revenue Target
            </h3>

            <p className="text-3xl font-bold text-blue-400 mt-4">
              $10K/mo
            </p>

            <p className="text-slate-400 mt-2">
              From content assets
            </p>

          </div>


        </section>



      </div>


    </main>

  );

}