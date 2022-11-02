import house1 from "./assets/house_1.jpg";
import {NavBar} from "./components/NavBar";
import {useState} from "react";
import {Background} from "./components/Background";
import {Button} from "./components/Button";
import {Title} from "./components/Title";


function Hero({applyBlur}) {
    return (
        <div className={"w-screen h-full relative"}>
            <Background className={applyBlur} src={house1} alt={"House"}/>
            <div className={`absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ${applyBlur}`}>
                <Title/>
            </div>
            <div className={`absolute top-[80%] left-[50%] -translate-x-2/4 ${applyBlur}`}>
                <div className={"flex flex-col md:flex-row w-screen justify-center gap-x-6 gap-y-4"}>
                    <Button primary={true} text={"Rent"}/>
                    <Button primary={false} text={"Buy"}/>
                </div>
            </div>
        </div>
    );
}

function App() {
    const [burgerOpen, burgerOpenSet] = useState(false);
    const applyBlur = burgerOpen ? "blur-sm" : ""

    return (
        <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden">
            <div className={"sticky z-10 top-0 left-0 w-full h-0"}>
                <NavBar burgerOpen={burgerOpen} burgerOpenSet={burgerOpenSet}/>
            </div>
            <div className={"snap-start snap-always"}>
                <Hero applyBlur={applyBlur}/>
            </div>
            <div className={"snap-start snap-always"}>
                <Hero applyBlur={applyBlur}/>
            </div>
            <div className={"snap-start snap-always"}>
                <Hero applyBlur={applyBlur}/>
            </div>
        </div>
    );
}

export default App;
