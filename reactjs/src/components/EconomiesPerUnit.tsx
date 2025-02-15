import { useConsumerUnits } from "../hooks/useConsumerUnits";


function EconomiesPerUnit() {
    const {data, totalPages, isLoading, error, page, setPage} = useConsumerUnits();

    if(isLoading) return <p>Carregando...</p>
    if(error) return <p>{error.message}</p>

    console.log(error)

    return (
        <div className="bg-zinc-900 w-full min-h-100">
            <table className="w-full border-collapse text-sm">
                <thead>
                    <tr className="bg-neutral-800">
                        <th className="p-4 py-3 pl-8 text-left text-neutral-300 text-xl last:rounded-tr-xl first:rounded-tl-xl">Unidade Consumidora</th>
                        <th className="p-4 py-3 pl-8 text-left text-neutral-300 text-xl last:rounded-tr-xl first:rounded-tl-xl">Porcentagem de Economia</th>
                    </tr>
                </thead>
                <tbody className="bg-zinc-900">                    
                    {data.map((item: { consumer_unit: string; economy_percentage: number }) => (
                        <tr key={item.consumer_unit} >
                            <td className="p-4 py-3 pl-8 text-left text-neutral-400 text-base">{item.consumer_unit}</td>
                            <td className="p-4 py-3 pl-8 text-left text-neutral-400 text-base">{item.economy_percentage.toFixed(2)}%</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </button>
        <span className="text-white text-lg">Página {page} de {totalPages}</span>
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded disabled:opacity-50"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >          Próxima
        </button>
        </div>
    );
}

export default EconomiesPerUnit;