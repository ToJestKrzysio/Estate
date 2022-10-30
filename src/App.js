import heroBackground from "./assets/hero_bg.jpg"
import {NavBar} from "./components/NavBar";


function App() {
    return (
        <div className="w-full h-full relative">
            <div className={"absolute relative top-0 left-0 -z-10"}>
                <img src={heroBackground} alt="House"/>
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary-800/60"></div>
            </div>
            <div className={"absolute top-0 left-0 w-full"}>
                <NavBar/>
                <h1>Find Your Dream Home</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem cum labore nostrum officiis perspiciatis quia quis repellendus repudiandae
                </p>
            </div>
        </div>
    );
}

export default App;
