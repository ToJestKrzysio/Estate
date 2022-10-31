// import heroBackground from "./assets/hero_bg.jpg"
import house2 from "./assets/house_2.jpg";
import house1 from "./assets/house_1.jpg";
import {NavBar} from "./components/NavBar";


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

function App() {
    return (<div className="w-screen h-screen relative">
        <div className={"w-screen h-screen absolute relative bg-gray-black overflow-hidden"}>
            <img
                src={house1}
                className={"absolute z-1 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 h-min-[45%] object-cover md:blur-none md:h-screen md:w-screen"}
                alt="House"/>
            <div className="absolute z-2 top-0 bottom-0 left-0 right-0 bg-primary-800/60"></div>
        </div>
        <div className={"absolute top-0 left-0 w-full"}>
            <NavBar/>
        </div>
        {/*<div className={"absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4"}>*/}
        {/*    <Title/>*/}
        {/*</div>*/}
    </div>);
}

export default App;
