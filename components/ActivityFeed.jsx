const defaultActivities = [
  {
    icon: "💰",
    title: "Commission Earned",
    description: "AI Tools campaign generated $245 commission.",
    time: "5 minutes ago",
    type: "Revenue",
  },
  {
    icon: "🔗",
    title: "New Affiliate Click",
    description: "127 visitors clicked your Jasper affiliate link.",
    time: "32 minutes ago",
    type: "Traffic",
  },
  {
    icon: "📝",
    title: "Content Published",
    description: "AI Tools 2026 comparison article went live.",
    time: "2 hours ago",
    type: "Content",
  },
  {
    icon: "🚀",
    title: "Campaign Launched",
    description: "VPN Security campaign is now active.",
    time: "Yesterday",
    type: "Campaign",
  },
];


export default function ActivityFeed({
  activities = defaultActivities,
}) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6">


      <div className="flex justify-between items-center mb-6">


        <h2 className="text-2xl font-bold">
          Activity Feed
        </h2>


        <span className="text-sm text-slate-400">
          Live Updates
        </span>


      </div>






      <div className="space-y-5">


        {activities.map((activity, index)=>(

          <div
            key={index}
            className="flex gap-4 items-start"
          >


            <div className="bg-slate-800 rounded-full w-12 h-12 flex items-center justify-center text-xl">

              {activity.icon}

            </div>





            <div className="flex-1">


              <div className="flex justify-between">


                <h3 className="font-semibold">
                  {activity.title}
                </h3>


                <span className="text-xs text-slate-500">
                  {activity.time}
                </span>


              </div>



              <p className="text-slate-400 text-sm mt-1">
                {activity.description}
              </p>



              <span className="inline-block mt-2 text-xs bg-slate-800 px-3 py-1 rounded-full text-slate-300">
                {activity.type}
              </span>


            </div>


          </div>


        ))}


      </div>



    </div>

  );

}