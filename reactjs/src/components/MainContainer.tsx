import { useConsumerUnits } from "../hooks/useConsumerUnits";
import Buttons from "./Buttons";
import EconomiesPerUnit from "./EconomiesPerUnit";


/**
 * Componente MainContainer encarregado de ser o principal container da aplicação, sendo o elemento pai dos componentes do título principal, da tabela e dos botões de controle
 */
function MainContainer() {
    const {data, totalPages, isLoading, error, page, setPage} = useConsumerUnits();

    return (
        <div className="flex items-center flex-col justify-center w-3/4 min-h-screen">
            <h1 className="self-start text-3xl text-white font-bold my-4">Economia UCs</h1>
            <EconomiesPerUnit data={data} totalPages={totalPages} isLoading={isLoading} error={error} page={page} setPage={setPage} />
            <Buttons page={page} totalPages={totalPages} setPage={setPage} isLoading={isLoading} />
        </div>
    );
}

export default MainContainer;