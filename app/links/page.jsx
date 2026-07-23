import Link from "next/link";

export const metadata = {
  title: "Affiliate Links | NorthSky CRM",
  description:
    "Manage NorthSky affiliate links, tracking URLs, and monetization campaigns.",
};

const affiliateLinks = [
  {
    product: "NordVPN",
    category: "VPN & Security",
    network: "Direct Affiliate",
    status: "Active",
    clicks: 1240,
    conversions: 32,
    commission: "$960",
    url: "#",
  },
  {
    product: "Saily eSIM",
    category: "Travel Tech",
    network: "Affiliate Program",
    status: "Active",
    clicks: 840,
    conversions: 21,
    commission: "$420",
    url: "#",
  },
  {
    product: "Jasper AI",
    category: "AI Software",
    network: "Partner Program",
    status: "Pending",
    clicks: 0,
    conversions: 0,
    commission: "$0",
    url: "#",
  },
  {
    product: "Copy.ai",
    category: "AI Writing",
    network: "Affiliate Program",
    status: "Pending",
    clicks: 0,
    conversions: 0,
    commission: "$0",
    url: "#",
  },
  {
    product: "Writesonic",
    category: "AI Content",
    network: "Partner Program",
    status: "Pending",
    clicks: 0,
    conversions: 0,
    commission: "$0",
    url: "#",
  },
];


export default function LinksPage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">


        <div className="flex justify-between items-center mb-10">

          <div>
            <h1 className="text-4xl font-bold">
              Affiliate Links
            </h1>

            <p className="text-slate-400 mt-2">
              Manage tracking links across NorthSky Reviews,
              Deals, and future websites.
            </p>
          </div>


          <button className="bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700">
            + Add Link
          </button>

        </div>



        <div className="overflow-x-auto">

          <table className="w-full bg-slate-900 rounded-xl overflow-hidden">

            <thead className="bg-slate-800">

              <tr className="text-left">

                <th className="p-4">
                  Product
                </th>

                <th className="p-4">
                  Category
                </th>

                <th className="p-4">
                  Network
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


              {affiliateLinks.map((link)=> (

                <tr
                  key={link.product}
                  className="border-t border-slate-800"
                >

                  <td className="p-4 font-semibold">
                    {link.product}
                  </td>


                  <td className="p-4 text-slate-400">
                    {link.category}
                  </td>


                  <td className="p-4 text-slate-400">
                    {link.network}
                  </td>


                  <td className="p-4">
                    {link.clicks}
                  </td>


                  <td className="p-4">
                    {link.conversions}
                  </td>


                  <td className="p-4 text-green-400">
                    {link.commission}
                  </td>


                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        link.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {link.status}
                    </span>

                  </td>


                </tr>

              ))}


            </tbody>

          </table>


        </div>



        <div className="grid md:grid-cols-4 gap-6 mt-10">


          <div className="bg-slate-900 p-6 rounded-xl">
            <p className="text-slate-400">
              Total Clicks
            </p>

            <h2 className="text-3xl font-bold">
              2,080
            </h2>
          </div>


          <div className="bg-slate-900 p-6 rounded-xl">

            <p className="text-slate-400">
              Conversions
            </p>

            <h2 className="text-3xl font-bold">
              53
            </h2>

          </div>


          <div className="bg-slate-900 p-6 rounded-xl">

            <p className="text-slate-400">
              Revenue
            </p>

            <h2 className="text-3xl font-bold text-green-400">
              $1,380
            </h2>

          </div>


          <div className="bg-slate-900 p-6 rounded-xl">

            <p className="text-slate-400">
              Conversion Rate
            </p>

            <h2 className="text-3xl font-bold">
              2.5%
            </h2>

          </div>


        </div>


      </div>

    </main>

  );
}