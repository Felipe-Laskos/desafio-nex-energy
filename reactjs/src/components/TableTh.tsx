
interface TableThProps {
    children: string
}

/**
 * Componente TableTh é um componente simples apenas para carregar as classes e ser usado como um padrão
 */
function TableTh(props: TableThProps) {
    return (
        <th className="p-4 py-3 pl-8 text-left font-normal text-neutral-300 text-lg last:rounded-tr-xl first:rounded-tl-xl">
            {props.children}
        </th>
    );
}

export default TableTh;