import Link from "next/link";

export const metadata = {
  title: "Affiliate Networks | NorthSky CRM",
  description:
    "Manage affiliate networks, partner programs, and monetization opportunities with NorthSky CRM.",
};

const networks = [
  {
    name: "Impact.com",
    category: "Enterprise Affiliate Network",
    status: "Apply",
    description:
      "Premium marketplace connecting brands, creators, and publishers.",
    url: "https://impact.com",
  },
  {
    name: "CJ Affiliate",
    category: "Affiliate Network",
    status: "Apply",
    description:
      "Large affiliate marketplace with thousands of advertisers.",
    url: "https://www.cj.com",
  },
  {
    name: "PartnerStack",
    category: "SaaS Partnerships",
    status: "Apply",
    description:
      "Great for software, AI, and B2B SaaS affiliate programs.",
    url: "https://partnerstack.com",
  },
  {
    name: "ShareASale",
    category: "Affiliate Network",
    status: "Apply",
    description:
      "Popular network for ecommerce and software partnerships.",
    url: "https://www.shareasale.com",
  },
  {
    name: "Awin",
    category: "Global Affiliate Network",
    status: "Apply",
    description:
      "Global affiliate platform with thousands of brands.",
    url: "https://www.awin.com",
  },
  {
    name: "NordVPN Affiliate",
    category: "VPN & Security",
    status: "Active",
    description:
      "Security affiliate program for VPN subscriptions.",
    url: "https://nordvpn.com/affiliate/",
  },
  {
    name: "Saily Affiliate",
    category: "Travel eSIM",
    status: "Active",
    description:
      "Travel connectivity affiliate opportunity.",
    url: "https://saily.com/affiliate/",
  },
];

export default function NetworksPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-6xl mx-auto">

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            Affiliate Networks
          </h1>

          <p className="text-slate-400 mt-3">
            Manage partnerships powering NorthSky Reviews,
            NorthSky Deals, and future revenue channels.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-6">

          {networks.map((network) => (

            <div
              key={network.name}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition"
            >

              <div className="flex justify-between items-start">

                <h2 className="text-xl font-semibold">
                  {network.name}
                </h2>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    network.status === "Active"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {network.status}
                </span>

              </div>


              <p className="text-sm text-blue-400 mt-3">
                {network.category}
              </p>


              <p className="text-slate-400 mt-3 text-sm">
                {network.description}
              </p>


              <a
                href={network.url}
                target="_blank"
                className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm"
              >
                Visit Network
              </a>


            </div>

          ))}

        </div>


        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-xl p-6">

          <h2 className="text-2xl font-bold">
            NorthSky Affiliate Strategy
          </h2>

          <ul className="mt-4 space-y-2 text-slate-300">

            <li>
              🤖 AI Tools → OpenAI, Jasper, Copy.ai, Writesonic
            </li>

            <li>
              🔐 Security → NordVPN, password managers, antivirus
            </li>

            <li>
              ✈️ Travel Tech → eSIMs, VPNs, travel accessories
            </li>

            <li>
              💻 SaaS → CRM, automation, productivity tools
            </li>

            <li>
              🛒 Deals → NorthSky Reviews comparison funnels
            </li>

          </ul>

        </div>

      </div>

    </main>
  );
}