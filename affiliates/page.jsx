import Link from "next/link";

export const metadata = {
  title: "Affiliate Programs | NorthSky Affiliate CRM",
  description:
    "Manage affiliate applications, approvals, commissions, and payout information.",
};

const affiliates = [
  {
    name: "OpenAI",
    category: "AI",
    status: "Waiting",
    commission: "-",
    cookie: "-",
    network: "Direct",
  },
  {
    name: "Jasper",
    category: "AI",
    status: "To Apply",
    commission: "-",
    cookie: "-",
    network: "PartnerStack",
  },
  {
    name: "Copy.ai",
    category: "AI",
    status: "To Apply",
    commission: "-",
    cookie: "-",
    network: "Direct",
  },
  {
    name: "Surfer SEO",
    category: "AI",
    status: "To Apply",
    commission: "-",
    cookie: "-",
    network: "Impact",
  },
  {
    name: "Writesonic",
    category: "AI",
    status: "To Apply",
    commission: "-",
    cookie: "-",
    network: "Direct",
  },
  {
    name: "NordVPN",
    category: "VPN",
    status: "Approved",
    commission: "",
    cookie: "",
    network: "Impact",
  },
  {
    name: "ExpressVPN",
    category: "VPN",
    status: "Rejected",
    commission: "",
    cookie: "",
    network: "Impact",
  },
  {
    name: "Surfshark",
    category: "VPN",
    status: "Rejected",
    commission: "",
    cookie: "",
    network: "Impact",
  },
  {
    name: "Proton VPN",
    category: "VPN",
    status: "To Apply",
    commission: "",
    cookie: "",
    network: "Direct",
  },
  {
    name: "Saily",
    category: "Travel",
    status: "Approved",
    commission: "",
    cookie: "",
    network: "Impact",
  },
  {
    name: "Airalo",
    category: "Travel",
    status: "Rejected",
    commission: "",
    cookie: "",
    network: "Direct",
  },
  {
    name: "Booking.com",
    category: "Travel",
    status: "To Apply",
    commission: "",
    cookie: "",
    network: "CJ",
  },
  {
    name: "Expedia",
    category: "Travel",
    status: "To Apply",
    commission: "",
    cookie: "",
    network: "CJ",
  },
  {
    name: "Shopify",
    category: "Software",
    status: "To Apply",
    commission: "",
    cookie: "",
    network: "Impact",
  },
  {
    name: "Canva",
    category: "Software",
    status: "Applied",
    commission: "",
    cookie: "",
    network: "Impact",
  },
];

function badge(status) {
  switch (status) {
    case "Approved":
      return "bg-green-500/20 text-green-400";
    case "Applied":
      return "bg-yellow-500/20 text-yellow-400";
    case "Rejected":
      return "bg-red-500/20 text-red-400";
    case "Waiting":
      return "bg-blue-500/20 text-blue-400";
    default:
      return "bg-slate-700 text-slate-300";
  }
}

export default function AffiliatesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold">
              Affiliate Programs
            </h1>

            <p className="mt-3 text-slate-400">
              Track applications, approvals, commissions, and affiliate
              partnerships.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-xl bg-blue-600 px-5 py-3 font-semibold hover:bg-blue-500"
          >
            Dashboard
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-slate-400">Total Programs</p>
            <h2 className="mt-2 text-4xl font-bold">
              {affiliates.length}
            </h2>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-slate-400">Approved</p>
            <h2 className="mt-2 text-4xl font-bold text-green-400">
              {affiliates.filter((a) => a.status === "Approved").length}
            </h2>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-slate-400">Applied</p>
            <h2 className="mt-2 text-4xl font-bold text-yellow-400">
              {affiliates.filter((a) => a.status === "Applied").length}
            </h2>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6">
            <p className="text-slate-400">Rejected</p>
            <h2 className="mt-2 text-4xl font-bold text-red-400">
              {affiliates.filter((a) => a.status === "Rejected").length}
            </h2>
          </div>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900">
          <table className="w-full">
            <thead className="border-b border-slate-800">
              <tr className="text-left">
                <th className="p-4">Company</th>
                <th className="p-4">Category</th>
                <th className="p-4">Network</th>
                <th className="p-4">Commission</th>
                <th className="p-4">Cookie</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {affiliates.map((affiliate) => (
                <tr
                  key={affiliate.name}
                  className="border-b border-slate-800 hover:bg-slate-800"
                >
                  <td className="p-4 font-medium">
                    {affiliate.name}
                  </td>

                  <td className="p-4 text-slate-300">
                    {affiliate.category}
                  </td>

                  <td className="p-4 text-slate-300">
                    {affiliate.network}
                  </td>

                  <td className="p-4">
                    {affiliate.commission || "-"}
                  </td>

                  <td className="p-4">
                    {affiliate.cookie || "-"}
                  </td>

                  <td className="p-4">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${badge(
                        affiliate.status
                      )}`}
                    >
                      {affiliate.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-500">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}