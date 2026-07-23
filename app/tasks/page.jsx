import Link from "next/link";

export const metadata = {
  title: "Tasks | NorthSky CRM",
  description:
    "Manage NorthSky affiliate marketing tasks, campaigns, and growth operations.",
};


const tasks = [
  {
    title: "Apply to Jasper AI Affiliate Program",
    category: "Affiliate",
    priority: "High",
    status: "Pending",
    due: "Today",
  },
  {
    title: "Publish Best AI Tools 2026 Article",
    category: "Content",
    priority: "High",
    status: "In Progress",
    due: "Today",
  },
  {
    title: "Add NordVPN CTA Buttons",
    category: "Optimization",
    priority: "Medium",
    status: "Completed",
    due: "July 23",
  },
  {
    title: "Create ChatGPT vs Claude Comparison",
    category: "SEO",
    priority: "Medium",
    status: "Planning",
    due: "July 25",
  },
  {
    title: "Review Affiliate Dashboard Metrics",
    category: "Analytics",
    priority: "Low",
    status: "Pending",
    due: "Weekly",
  },
];


export default function TasksPage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">

      <div className="max-w-7xl mx-auto">


        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-4xl font-bold">
              Task Manager
            </h1>

            <p className="text-slate-400 mt-2">
              Organize NorthSky affiliate growth activities.
            </p>

          </div>


          <button className="bg-blue-600 px-5 py-3 rounded-lg hover:bg-blue-700">
            + New Task
          </button>


        </div>




        <div className="grid md:grid-cols-4 gap-6 mb-10">


          <div className="bg-slate-900 p-6 rounded-xl">

            <p className="text-slate-400">
              Total Tasks
            </p>

            <h2 className="text-3xl font-bold">
              24
            </h2>

          </div>



          <div className="bg-slate-900 p-6 rounded-xl">

            <p className="text-slate-400">
              Completed
            </p>

            <h2 className="text-3xl font-bold text-green-400">
              12
            </h2>

          </div>



          <div className="bg-slate-900 p-6 rounded-xl">

            <p className="text-slate-400">
              In Progress
            </p>

            <h2 className="text-3xl font-bold">
              7
            </h2>

          </div>



          <div className="bg-slate-900 p-6 rounded-xl">

            <p className="text-slate-400">
              High Priority
            </p>

            <h2 className="text-3xl font-bold text-red-400">
              5
            </h2>

          </div>


        </div>





        <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden">


          <table className="w-full">


            <thead className="bg-slate-800">


              <tr className="text-left">

                <th className="p-4">
                  Task
                </th>

                <th className="p-4">
                  Category
                </th>

                <th className="p-4">
                  Priority
                </th>

                <th className="p-4">
                  Status
                </th>

                <th className="p-4">
                  Due
                </th>

              </tr>


            </thead>



            <tbody>


              {tasks.map((task)=>(

                <tr
                  key={task.title}
                  className="border-t border-slate-800"
                >

                  <td className="p-4 font-semibold">
                    {task.title}
                  </td>


                  <td className="p-4 text-slate-400">
                    {task.category}
                  </td>


                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-xs ${
                        task.priority === "High"
                        ? "bg-red-500/20 text-red-400"
                        : task.priority === "Medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-blue-500/20 text-blue-400"
                      }`}
                    >
                      {task.priority}
                    </span>

                  </td>



                  <td className="p-4">

                    <span
                      className="px-3 py-1 rounded-full text-xs bg-slate-800"
                    >
                      {task.status}
                    </span>

                  </td>



                  <td className="p-4 text-slate-400">
                    {task.due}
                  </td>


                </tr>

              ))}


            </tbody>


          </table>


        </div>






        <div className="mt-10 bg-slate-900 rounded-xl p-6 border border-slate-800">


          <h2 className="text-2xl font-bold">
            Daily Growth Checklist
          </h2>


          <div className="grid md:grid-cols-3 gap-4 mt-6">


            <div className="bg-slate-800 p-5 rounded-lg">

              🤖 Publish 1 AI review article

            </div>


            <div className="bg-slate-800 p-5 rounded-lg">

              🔗 Add affiliate links

            </div>


            <div className="bg-slate-800 p-5 rounded-lg">

              📈 Review analytics

            </div>


          </div>


        </div>



      </div>


    </main>

  );

}