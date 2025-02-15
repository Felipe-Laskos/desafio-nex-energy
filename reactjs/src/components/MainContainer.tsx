import Body from "./Body";
import Buttons from "./Buttons";
import EconomiesPerUnit from "./EconomiesPerUnit";


function MainContainer() {
    return (
        <div className="flex items-center flex-col justify-center w-3/4">
            <h1 className="self-start text-4xl text-white">Economia UCs</h1>
            <EconomiesPerUnit />
            <Buttons />
        </div>
    );
}

export default MainContainer;