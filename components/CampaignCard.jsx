export default function CampaignCard({
  name,
  category,
  revenue,
  conversions,
  status = "Active",
  icon = "🚀",
}) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition">


      <div className="flex justify-between items-start">


        <div>

          <p className="text-blue-400 text-sm">
            {category}
          </p>


          <h3 className="text-xl font-bold mt-2">
            {name}
          </h3>


        </div>



        <div className="text-2xl">
          {icon}
        </div>


      </div>






      <div className="mt-6">


        <p className="text-slate-400 text-sm">
          Revenue Generated
        </p>


        <h2 className="text-3xl font-bold text-green-400 mt-1">
          {revenue}
        </h2>


      </div>







      <div className="flex justify-between mt-6 text-sm">


        <div>

          <p className="text-slate-400">
            Conversions
          </p>


          <p className="font-semibold mt-1">
            {conversions}
          </p>


        </div>





        <div className="text-right">


          <p className="text-slate-400">
            Status
          </p>


          <span className="inline-block mt-1 px-3 py-1 rounded-full text-xs bg-green-500/20 text-green-400">
            {status}
          </span>


        </div>


      </div>




    </div>

  );

}