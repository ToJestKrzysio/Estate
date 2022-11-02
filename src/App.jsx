import {NavBar} from "./components/NavBar";
import {useState} from "react";
import {Hero} from "./components/Hero";
import {Properties} from "./components/Properties";


function App() {
    const [burgerOpen, burgerOpenSet] = useState(false);
    const applyBlur = burgerOpen ? "blur-sm" : ""

    return (
        <div className="snap-y snap-mandatory h-screen w-screen overflow-y-scroll overflow-x-hidden">
            <div className={"sticky z-[1] top-0 left-0 w-full h-0"}>
                <NavBar burgerOpen={burgerOpen} burgerOpenSet={burgerOpenSet}/>
            </div>
            <div className={"snap-start snap-always"}>
                <Hero applyBlur={applyBlur}/>
            </div>
            <div className={"snap-start snap-always"}>
                <Properties applyBlur={applyBlur}/>
            </div>
            <div className={"snap-start snap-always"}>
                <Hero applyBlur={applyBlur}/>
            </div>
        </div>
    );
}

export default App;
