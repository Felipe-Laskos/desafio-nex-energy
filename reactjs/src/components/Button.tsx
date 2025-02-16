export enum Funcs {
    NEXT = "Próxima",
    PREVIOUS = "Anterior"
}

interface ButtonProps {
    page: number,
    totalPages: number,
    setPage: (page: number) => void,
    func: Funcs
}

export function Button(props: ButtonProps) {
    return (
        <button
            className="bg-gray-700 text-white px-10 py-2 mx-3 rounded disabled:opacity-50 disabled:bg-transparent border-3 border-gray-700 cursor-pointer transition-colors"
            disabled={props.func == Funcs.PREVIOUS ? props.page === 1 : props.page === props.totalPages}
            onClick={props.func == Funcs.PREVIOUS ? () => props.setPage(props.page - 1) : () => props.setPage(props.page + 1)}
        >
            {props.func}
        </button>
    );
}