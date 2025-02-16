
interface TableThProps {
    children: string
}

function TableTh(props: TableThProps) {
    return (
        <th className="p-4 py-3 pl-8 text-left font-normal text-neutral-300 text-lg last:rounded-tr-xl first:rounded-tl-xl">
            {props.children}
        </th>
    );
}

export default TableTh;