import Link from "next/link";

export const metadata = {
  title: "Content Manager | NorthSky CRM",
  description:
    "Manage NorthSky affiliate content, reviews, comparisons, and SEO campaigns.",
};


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


export default function ContentPage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">


        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Content Manager
            </h1>

            <p className="text-slate-400 mt-2">
              Create, track, and optimize NorthSky affiliate content.
            </p>
          </div>


          <button className="bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700">
            + New Article
          </button>

        </div>



        <div className="grid md:grid-cols-3 gap-6">


          {content.map((item)=> (

            <div
              key={item.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >

              <div className="flex justify-between">

                <h2 className="text-xl font-semibold">
                  {item.title}
                </h2>


                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    item.status === "Published"
                    ? "bg-green-500/20 text-green-400"
                    : item.status === "Draft"
                    ? "bg-yellow-500/20 text-yellow-400"
                    : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {item.status}
                </span>

              </div>


              <p className="text-blue-400 mt-3">
                {item.type}
              </p>


              <p className="text-slate-400 text-sm mt-2">
                {item.category}
              </p>



              <div className="mt-6 space-y-2 text-sm">

                <div className="flex justify-between">
                  <span>
                    Monthly Traffic
                  </span>

                  <span>
                    {item.traffic}
                  </span>
                </div>


                <div className="flex justify-between">

                  <span>
                    Affiliate Revenue
                  </span>

                  <span className="text-green-400">
                    {item.revenue}
                  </span>

                </div>

              </div>



              <button className="mt-6 w-full bg-slate-800 hover:bg-slate-700 py-2 rounded-lg">
                Manage Content
              </button>


            </div>

          ))}


        </div>




        <div className="mt-12 bg-slate-900 rounded-xl p-6 border border-slate-800">


          <h2 className="text-2xl font-bold">
            AI Content Pipeline
          </h2>


          <div className="grid md:grid-cols-4 gap-4 mt-6">


            <div className="bg-slate-800 p-4 rounded-lg">
              <p className="text-slate-400">
                Ideas
              </p>
              <h3 className="text-2xl font-bold">
                42
              </h3>
            </div>


            <div className="bg-slate-800 p-4 rounded-lg">

              <p className="text-slate-400">
                Writing
              </p>

              <h3 className="text-2xl font-bold">
                8
              </h3>

            </div>


            <div className="bg-slate-800 p-4 rounded-lg">

              <p className="text-slate-400">
                Published
              </p>

              <h3 className="text-2xl font-bold">
                27
              </h3>

            </div>


            <div className="bg-slate-800 p-4 rounded-lg">

              <p className="text-slate-400">
                Revenue Pages
              </p>

              <h3 className="text-2xl font-bold text-green-400">
                14
              </h3>

            </div>


          </div>


        </div>


      </div>

    </main>

  );
}