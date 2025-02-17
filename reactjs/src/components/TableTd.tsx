interface TableTdProps {
    children: string | string[] | number
}

/**
 * Componente TableTd é um componente simples apenas para carregar as classes e ser usado como um padrão
 */
function TableTd(props: TableTdProps) {
    return (
        <td className="p-4 py-3 pl-8 text-left text-neutral-400 text-base">
            {props.children}
        </td>
    );
}

export default TableTd;