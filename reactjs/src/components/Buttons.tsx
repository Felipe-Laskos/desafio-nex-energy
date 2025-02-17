import { useState } from "react";
import {Button, Funcs} from "./Button";
import JumpNumberBtn from "./JumpNumberBtn";

interface ButtonsProps {
    page: number,
    totalPages: number,
    isLoading: boolean,
    setPage: (page: number) => void
}


/**
 * Componente Buttons encarregado de agrupar os botões que mudam o número do pulo e os botões que mudam as páginas
 */
function Buttons(props: ButtonsProps) {
    const [jumpNumber, setJumpNumber] = useState(1);

    return (
        <div className="flex items-center justify-center self-end my-4">
            <div className="flex items-center justify-center mr-5">
                <p className="text-white text-lg mx-3" >Pulo: </p>
                <JumpNumberBtn currentJumpNumber={jumpNumber} jumpNumber={1} setJumpNumber={setJumpNumber} />
                <JumpNumberBtn currentJumpNumber={jumpNumber} jumpNumber={10} setJumpNumber={setJumpNumber} />
            </div>

            <Button func={Funcs.PREVIOUS} page={props.page} totalPages={props.totalPages} setPage={props.setPage} jumpNumber={jumpNumber} />
            <p className="text-white text-lg mx-3">Página <span className="min-w-2">{props.page}</span> de <span className="min-w-2">{props.isLoading ? "000" : props.totalPages}</span></p>
            <Button func={Funcs.NEXT} page={props.page} totalPages={props.totalPages} setPage={props.setPage} jumpNumber={jumpNumber} />
        </div>
    );
}

export default Buttons;