import Link from "next/link";


const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: "🏠",
  },
  {
    name: "Networks",
    href: "/networks",
    icon: "🤝",
  },
  {
    name: "Links",
    href: "/links",
    icon: "🔗",
  },
  {
    name: "Content",
    href: "/content",
    icon: "📝",
  },
  {
    name: "Campaigns",
    href: "/campaigns",
    icon: "🚀",
  },
  {
    name: "Revenue",
    href: "/revenue",
    icon: "💰",
  },
  {
    name: "Analytics",
    href: "/analytics",
    icon: "📊",
  },
  {
    name: "Tasks",
    href: "/tasks",
    icon: "✅",
  },
  {
    name: "Settings",
    href: "/settings",
    icon: "⚙️",
  },
];


export default function Sidebar() {

  return (

    <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6 hidden md:block">


      <div className="mb-10">


        <h1 className="text-2xl font-bold">
          NorthSky CRM
        </h1>


        <p className="text-slate-400 text-sm mt-1">
          Affiliate Growth OS
        </p>


      </div>





      <nav className="space-y-2">


        {navigation.map((item)=>(

          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
          >

            <span className="text-lg">
              {item.icon}
            </span>


            <span>
              {item.name}
            </span>


          </Link>

        ))}


      </nav>







      <div className="mt-10 bg-slate-800 rounded-xl p-5">


        <p className="text-sm text-slate-400">
          Revenue Goal
        </p>


        <h3 className="text-2xl font-bold mt-2">
          $10,000/mo
        </h3>



        <div className="bg-slate-700 h-2 rounded-full mt-4">


          <div
            className="bg-blue-600 h-2 rounded-full w-[84%]"
          />


        </div>



        <p className="text-xs text-slate-400 mt-3">
          $8,420 achieved
        </p>


      </div>






      <div className="mt-6 text-xs text-slate-500">


        <p>
          NorthSky Affiliate CRM v1.0
        </p>


        <p className="mt-1">
          Built for growth 🚀
        </p>


      </div>



    </aside>

  );

}