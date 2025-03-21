export default function Home() {
  const roteiro = [
    ["1", "Paris"],
    ["2", "Paris"],
    ["3", "Champagne"],
    ["4", "Borgonha"],
    ["5", "Borgonha"],
    ["6", "Vale do Loire"],
    ["7", "Vale do Loire"],
    ["8", "Bordeaux"],
    ["9", "Bordeaux"],
    ["10", "Bordeaux"],
    ["11", "Marselha"],
    ["12", "Canes e Nice"],
    ["13", "Saint-Tropez"],
    ["14", "Marselha"],
    ["15", "Paris"],
    ["16", "Paris"],
    ["17", "Retorno às 13h"],
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 space-y-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-2">Roteiro de Viagem pela França 🇫🇷</h1>
        <p className="text-lg text-gray-600">
          Uma jornada por cidades incríveis, vinhos e paisagens inesquecíveis.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">📅 Calendário</h2>
        <div className="bg-white shadow-md rounded-xl overflow-hidden border">
          <table className="w-full table-auto text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-2">Dia</th>
                <th className="px-4 py-2">Destino</th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {roteiro.map(([dia, destino]) => (
                <tr key={dia} className="hover:bg-gray-50">
                  <td className="px-4 py-2 font-medium">Dia {dia}</td>
                  <td className="px-4 py-2">{destino}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
