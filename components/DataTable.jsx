export default function DataTable({
  title,
  columns,
  data,
}) {

  return (

    <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">


      {title && (

        <div className="p-6 border-b border-slate-800">

          <h2 className="text-2xl font-bold">
            {title}
          </h2>

        </div>

      )}



      <div className="overflow-x-auto">


        <table className="w-full">


          <thead className="bg-slate-800">


            <tr className="text-left">


              {columns.map((column)=>(

                <th
                  key={column.key}
                  className="p-4 text-slate-300"
                >

                  {column.label}

                </th>

              ))}


            </tr>


          </thead>





          <tbody>


            {data.map((row, index)=>(

              <tr
                key={index}
                className="border-t border-slate-800 hover:bg-slate-800/50 transition"
              >


                {columns.map((column)=>(


                  <td
                    key={column.key}
                    className="p-4"
                  >

                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]
                    }


                  </td>


                ))}


              </tr>


            ))}


          </tbody>


        </table>


      </div>


    </div>

  );

}