import axios from "axios";
import { useEffect, useState } from "react";

function Dashboard() {
  const [results, setResults] = useState([])
  const [render, setRender] = useState(false)


  useEffect(() => {
    const dataBarang = async () => {
      const datas = await axios.get("http://localhost:8000/data")
      if (JSON.stringify(datas.data) !== JSON.stringify(results)) {
        setResults(datas.data)
        setRender(true)
      }

    }
    const interval = setInterval(dataBarang, 1000);
    return () => clearInterval(interval)
    // dataBarang()
  }, [results])

  return (
    <div className="p-24 flex justify-center items-center h-screen flex-col">
      <div className="relative overflow-hidden shadow-md rounded-lg">
        <table className="table-fixed w-full text-left">
          <thead className="uppercase bg-[#6b7280] text-[#e5e7eb]">
            <tr>
              <td className="py-1 border text-center  p-4">No</td>
              <td className="py-1 border text-center  p-4">Nama Barang</td>
              <td className="py-1 border text-center  p-4">Tanggal Datang</td>
              <td className="py-1 border text-center  p-4">Stok</td>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-500">
            {render && (
              results.map((item, index) => (
                <tr key={index} className="py-5">
                  <td className="py-5 border text-center  p-4">{index + 1}</td>
                  <td className="py-5 border text-center  p-4">
                    {item.nama_barang}
                  </td>
                  <td className="py-5 border text-center  p-4">{item.tanggal_masuk}</td>
                  <td className="py-5 border text-center  p-4">{item.stok}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
