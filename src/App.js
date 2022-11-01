import Select from "react-select";

import house1 from "./assets/house_1.jpg";
import {NavBar} from "./components/NavBar";
import {useState} from "react";


function Title() {
    return (
        <div className={"flex flex-col mx-auto max-w-xl"}>
            <h1 className={"text-4xl text-center font-bold text-white  mb-6"}>
                Find Your Dream Home
            </h1>
            <p className={"text-center text-white"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum labore nostrum officiis perspiciatis quia quis repellendus repudiandae
            </p>
        </div>
    )
}


function SearchBar() {
    return (
        <div className="w-screen justify-center">
            <div className={"flex justify-center gap-x-3 mb-2"}>
                <button className="w-20 h-12 bg-primary-400 rounded-md text-white text-sm">Rent</button>
                <button className="w-20 h-12 bg-white rounded-md text-primary-400 text-sm">Buy</button>
            </div>
            <div className="w-[60%] h-30 bg-white rounded-md flex mx-auto px-5 py-4">
                <div className="flex-1 border-l border-white px-2">
                    <p className="font-bold mb-2">Location</p>
                    <Select/>
                </div>
                <div className="flex-1 border-l border-gray-100 px-2">
                    <h1 className="text-center">Location</h1>
                </div>
                <div className="flex-1 border-l border-gray-100 px-2">
                    <h1 className="text-center">Location</h1>
                </div>
                <div className="flex flex-1 border-l border-gray-100 px-2 justify-center align items-center">
                    <button className="bg-primary-500 rounded-md mx-auto px-4 py-1 text-white">Search</button>
                </div>
                {/*<div className="w-[25%]">*/}
                {/*    <div>*/}
                {/*        <h4 className="w-full">Location</h4>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="w-[25%] px-3 border-l border-gray-100">*/}
                {/*    <div>*/}
                {/*        <h4 className="w-full">Location</h4>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="w-[25%]">*/}
                {/*    <div>*/}
                {/*        <h4 className="w-full">Location</h4>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="grow flex flex-col align-center justify-center ">*/}
                {/*    <div>*/}
                {/*        <button className="w-full">Search</button>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>

    )
}


function App() {
    const [burgerOpen, burgerOpenSet] = useState(false);
    const applyBlur = burgerOpen ? "blur-sm" : ""

    return (
        <div className={"w-screen h-screen relative"}>
            <div className={`zw-screen h-screen absolute relative bg-gray-black overflow-hidden ${applyBlur}`}>
                <img
                    src={house1}
                    className={"absolute z-1 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 h-min-[45%] object-cover md:blur-none h-screen md:w-screen"}
                    alt="House"/>
                <div className="absolute z-2 top-0 bottom-0 left-0 right-0 bg-primary-800/60"></div>
            </div>
            <div className={"absolute z-10 top-0 left-0 w-full"}>
                <NavBar burgerOpen={burgerOpen} burgerOpenSet={burgerOpenSet}/>
            </div>
            <div className={`absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ${applyBlur}`}>
                <Title/>
            </div>
            <div className={`absolute top-[80%] left-[50%] -translate-x-2/4 ${applyBlur}`}>
                <div className={"flex flex-col md:flex-row w-screen justify-center gap-x-6 gap-y-4"}>
                    <button className="mx-auto md:mx-0 w-[80%] md:w-44 py-2 rounded-md bg-primary-400 text-white">Rent</button>
                    <button className="mx-auto md:mx-0 w-[80%] md:w-44 py-2 rounded-md bg-white text-primary-400">Buy</button>
                </div>
            </div>
        </div>);
}

export default App;
