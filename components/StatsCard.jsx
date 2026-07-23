export default function StatsCard({
  title,
  value,
  change,
  icon,
  positive = true,
}) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-blue-500 transition">


      <div className="flex justify-between items-start">


        <div>

          <p className="text-slate-400 text-sm">
            {title}
          </p>


          <h2 className="text-3xl font-bold mt-3">
            {value}
          </h2>


        </div>




        <div className="text-3xl">
          {icon}
        </div>


      </div>





      {change && (

        <p
          className={`mt-4 text-sm ${
            positive
            ? "text-green-400"
            : "text-red-400"
          }`}
        >

          {change}

        </p>

      )}



    </div>

  );

}