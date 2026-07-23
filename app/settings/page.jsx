export const metadata = {
  title: "Settings | NorthSky CRM",
  description:
    "Manage NorthSky CRM account settings, integrations, tracking, and preferences.",
};


const settingsSections = [
  {
    title: "Profile Settings",
    items: [
      "Founder Name",
      "Email Address",
      "Company Name",
      "Website URL",
    ],
  },
  {
    title: "Tracking Settings",
    items: [
      "Google Analytics ID",
      "UTM Tracking",
      "Affiliate Cookie Tracking",
      "Conversion Tracking",
    ],
  },
  {
    title: "Integrations",
    items: [
      "Impact.com API",
      "Supabase Database",
      "Stripe Payments",
      "Email Marketing",
    ],
  },
];


export default function SettingsPage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white p-8">


      <div className="max-w-6xl mx-auto">


        <div className="mb-10">

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-slate-400 mt-2">
            Configure NorthSky CRM preferences and integrations.
          </p>

        </div>




        <div className="grid md:grid-cols-3 gap-6">


          {settingsSections.map((section)=>(

            <div
              key={section.title}
              className="bg-slate-900 border border-slate-800 rounded-xl p-6"
            >

              <h2 className="text-xl font-bold">
                {section.title}
              </h2>


              <div className="mt-5 space-y-3">

                {section.items.map((item)=>(

                  <div
                    key={item}
                    className="bg-slate-800 rounded-lg p-3 text-slate-300 hover:bg-slate-700 cursor-pointer"
                  >
                    {item}
                  </div>

                ))}

              </div>


            </div>

          ))}


        </div>







        <div className="mt-10 bg-slate-900 border border-slate-800 rounded-xl p-6">


          <h2 className="text-2xl font-bold mb-6">
            Platform Configuration
          </h2>



          <div className="space-y-5">


            <div>

              <label className="text-sm text-slate-400">
                CRM Name
              </label>

              <input
                defaultValue="NorthSky Affiliate CRM"
                className="w-full mt-2 bg-slate-800 rounded-lg p-3 outline-none"
              />

            </div>




            <div>

              <label className="text-sm text-slate-400">
                Default Website
              </label>

              <input
                defaultValue="northsky-reviews.vercel.app"
                className="w-full mt-2 bg-slate-800 rounded-lg p-3 outline-none"
              />

            </div>





            <div>

              <label className="text-sm text-slate-400">
                Monthly Revenue Goal
              </label>

              <input
                defaultValue="$10,000"
                className="w-full mt-2 bg-slate-800 rounded-lg p-3 outline-none"
              />

            </div>



          </div>



          <button className="mt-8 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
            Save Settings
          </button>


        </div>







        <div className="mt-10 grid md:grid-cols-2 gap-6">


          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h3 className="text-xl font-bold">
              Notifications
            </h3>


            <div className="mt-4 space-y-3 text-slate-300">


              <label className="flex justify-between">
                Revenue Alerts
                <input type="checkbox" defaultChecked />
              </label>


              <label className="flex justify-between">
                New Affiliate Approval
                <input type="checkbox" defaultChecked />
              </label>


              <label className="flex justify-between">
                Weekly Reports
                <input type="checkbox" />
              </label>


            </div>


          </div>





          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


            <h3 className="text-xl font-bold">
              Security
            </h3>


            <button className="mt-5 w-full bg-slate-800 hover:bg-slate-700 p-3 rounded-lg">
              Change Password
            </button>


            <button className="mt-3 w-full bg-red-600 hover:bg-red-700 p-3 rounded-lg">
              Logout All Devices
            </button>


          </div>


        </div>



      </div>


    </main>

  );

}