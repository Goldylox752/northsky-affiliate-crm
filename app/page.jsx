import Link from "next/link";

export const metadata = {
  title: "NorthSky Affiliate CRM | Dashboard",
  description:
    "Manage affiliate programs, networks, content, links, revenue, and tasks from one dashboard.",
};

const stats = [
  { label: "Affiliate Programs", value: "48" },
  { label: "Approved", value: "3" },
  { label: "Applied", value: "1" },
  { label: "Rejected", value: "3" },
  { label: "Affiliate Networks", value: "9" },
  { label: "Content Ideas", value: "12" },
];

const quickActions = [
  {
    title: "Affiliate Programs",
    description: "Track applications, approvals, commissions, and payouts.",
    href: "/affiliates",
  },
  {
    title: "Affiliate Networks",
    description: "Manage Impact, CJ, Awin, PartnerStack and more.",
    href: "/networks",
  },
  {
    title: "Content Planner",
    description: "Plan reviews, comparisons, and buying guides.",
    href: "/content",
  },
  {
    title: "Revenue Tracker",
    description: "Monitor commissions and monthly earnings.",
    href: "/revenue",
  },
  {
    title: "Affiliate Links",
    description: "Store and organize every affiliate link.",
    href: "/links",
  },
  {
    title: "Task Manager",
    description: "Keep track of daily affiliate goals.",
    href: "/tasks",
  },
];

const today = [
  "Apply to 15–25 affiliate programs",
  "Join 4–6 affiliate networks",
  "Follow up on pending applications",
  "Publish one affiliate article",
  "Update affiliate links",
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-slate-800 bg-slate-900 p-10">
          <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold">
            NorthSky Affiliate CRM
          </span>

          <h1 className="mt-6 text-5xl font-extrabold">
            Grow Your Affiliate Business
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-300">
            Manage affiliate partnerships, applications, commissions,
            content, links, and revenue from one dashboard.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/affiliates"
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
            >
              View Affiliate Programs
            </Link>

            <Link
              href="/content"
              className="rounded-xl border border-slate-700 px-6 py-3 font-semibold hover:bg-slate-800"
            >
              Content Planner
            </Link>
          </div>
        </div>

        <section className="mt-14">
          <h2 className="mb-6 text-3xl font-bold">
            Dashboard Overview
          </h2>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
              >
                <p className="text-sm text-slate-400">{item.label}</p>

                <h3 className="mt-3 text-4xl font-bold">
                  {item.value}
                </h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold">
              Today's Goals
            </h2>

            <ul className="mt-6 space-y-4">
              {today.map((goal) => (
                <li
                  key={goal}
                  className="flex items-center gap-3 rounded-xl bg-slate-800 p-4"
                >
                  <span className="text-green-400">✔</span>
                  {goal}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold">
              Quick Actions
            </h2>

            <div className="mt-6 space-y-4">
              {quickActions.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="block rounded-xl border border-slate-800 bg-slate-800 p-5 transition hover:border-blue-500 hover:bg-slate-700"
                >
                  <h3 className="text-lg font-semibold">
                    {card.title}
                  </h3>

                  <p className="mt-2 text-slate-400">
                    {card.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">
            NorthSky Affiliate CRM
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <h3 className="font-semibold">Affiliate Programs</h3>
              <p className="mt-2 text-slate-400">
                Track every program you're applying to and monitor approvals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Content Library</h3>
              <p className="mt-2 text-slate-400">
                Organize reviews, comparisons, and buying guides.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Revenue</h3>
              <p className="mt-2 text-slate-400">
                Monitor commissions, clicks, conversions, and payouts.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Growth</h3>
              <p className="mt-2 text-slate-400">
                Scale to 100+ affiliate partnerships with one central dashboard.
              </p>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}