export enum Funcs {
    NEXT = "Próxima",
    PREVIOUS = "Anterior"
}

interface ButtonProps {
    page: number,
    totalPages: number,
    setPage: (page: number) => void,
    jumpNumber: number,
    func: Funcs
}

/**
 * Componente Button: Um componente encarregado de mudar o número da página de acordo com o número de pulo selecionado nos botões ao lado esquerdo
 */
export function Button(props: ButtonProps) {
    return (
        <button
            className="bg-gray-700 text-white px-10 py-2 rounded disabled:opacity-50 disabled:bg-transparent border-3 border-gray-700 cursor-pointer transition-colors"
            disabled={props.func == Funcs.PREVIOUS ? props.page === 1 : props.page === props.totalPages}
            onClick={props.func == Funcs.PREVIOUS ? () => {
                let nextNumber = props.page - props.jumpNumber;
                
                if(nextNumber < 1) {
                    nextNumber = 1;
                }

                props.setPage(nextNumber);
            } : () => {
                let nextNumber = props.page + props.jumpNumber;
                
                if(nextNumber > props.totalPages) {
                    nextNumber = props.totalPages;
                }
                
                props.setPage(nextNumber);
            }}
        >
            {props.func}
        </button>
    );
}