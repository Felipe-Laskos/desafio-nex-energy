import {Button, Funcs} from "./Button";

interface ButtonsProps {
    page: number,
    totalPages: number,
    isLoading: boolean,
    setPage: (page: number) => void
}

function Buttons(props: ButtonsProps) {
    return (
        <div className="flex items-center justify-center self-end">
            <Button func={Funcs.PREVIOUS} page={props.page} totalPages={props.totalPages} setPage={props.setPage} />
            <p className="text-white text-lg">Página <span className="min-w-2">{props.page}</span> de <span className="min-w-2">{props.isLoading ? "000" : props.totalPages}</span></p>
            <Button func={Funcs.NEXT} page={props.page} totalPages={props.totalPages} setPage={props.setPage} />
        </div>
    );
}

export default Buttons;