interface JumpNumberBtnProps {
    currentJumpNumber: number,
    jumpNumber: number,
    setJumpNumber: (num: number) => void
}

/**
 * Componente JumpNumberBtn encarregado de mudar o número de pulo das páginas
 */
function JumpNumberBtn(props: JumpNumberBtnProps) {
    return (
        <button className={`bg-gray-700 text-white p-2 rounded border-3 border-gray-700 cursor-pointer transition-colors mx-1 ${props.currentJumpNumber === props.jumpNumber ? "" : "bg-transparent opacity-50"}`} onClick={() => props.setJumpNumber(props.jumpNumber)}>
            {props.jumpNumber === 1? "01" : props.jumpNumber}
        </button>
    );
}

export default JumpNumberBtn;