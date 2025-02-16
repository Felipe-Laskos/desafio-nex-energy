import { ConsumerUnitEconomy } from "../hooks/useConsumerUnits";
import TableTd from "./TableTd";
import TableTh from "./TableTh";

interface EconomiesPerUnitProps {
    data: ConsumerUnitEconomy[],
    totalPages: number,
    isLoading: boolean,
    error: Error | null,
    page: number,
    setPage: (page: number) => void
}

function EconomiesPerUnit(props: EconomiesPerUnitProps) {
    return (
        <div className="bg-zinc-900 w-full min-h-4/5 rounded-b-xl my-4">
            <table className="w-full border-collapse text-sm">
                <thead>
                    <tr className="bg-neutral-800">
                        <TableTh>Unidade Consumidora</TableTh>
                        <TableTh>Porcentagem de Economia</TableTh>
                    </tr>
                </thead>
                <tbody className="bg-zinc-900">
                    {
                        props.isLoading ? (
                            <tr>
                                <TableTd>Carregando ...</TableTd>
                            </tr>
                        ): props.data.map((item: ConsumerUnitEconomy) => (
                            <tr key={item.consumer_unit} >
                                <TableTd>{item.consumer_unit}</TableTd>
                                <TableTd>{item.economy_percentage.toFixed(2)}%</TableTd>
                            </tr>
                        ))
                    }
                    {
                        props.error && (
                            <tr>
                                <td className="p-4 py-3 pl-8 text-left text-red-500 text-base">{props.error.message}</td>
                            </tr>
                        )
                    }                    
                </tbody>
            </table>


        </div>
    );
}

export default EconomiesPerUnit;