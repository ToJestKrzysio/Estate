import heroBackground from "./assets/hero_bg.jpg"
import envelopeOpen from "./assets/EnvelopeOpen.svg"
import facebook from "./assets/facebook.svg"
import social1 from "./assets/social_1.svg"
import linkedin from "./assets/linkedin.svg"
import instagram from "./assets/instagram.svg"
import social2 from "./assets/social_2.svg"
import phone from "./assets/Phone.svg"

function NavBar({className}) {
    return (
        <div className={"flex flex-column"}>
            <div className={"flex justify-between w-full mx-20 mt-7"}>
                <div className={"flex items-center gap-x-1 cursor-pointer"}>
                    <img src={envelopeOpen} alt={"Envelope Open"}/>
                    <span className={"font-bold text-sm text-white whitespace-nowrap"}>Email us at:</span>
                    <span className={"text-white text-sm"}>example@example.com</span>
                </div>
                <div className={"flex items-center"}>
                    <div className={"flex gap-x-4 mr-4"}>
                        <img className={"cursor-pointer"} src={facebook} alt={"facebook"}/>
                        <img className={"cursor-pointer"} src={social1} alt={"social 1"}/>
                        <img className={"cursor-pointer"} src={linkedin} alt={"linkedin"}/>
                        <img className={"cursor-pointer"} src={instagram} alt={"instagram"}/>
                        <img className={"cursor-pointer"} src={social2} alt={"social 2"}/>
                    </div>
                    <div className={"flex h-full items-center pl-6 border-l"}>
                        <img src={phone} className={"w-[24px] h-[24px]"} alt="Phone"/>
                        <span className={"text-white whitespace-nowrap"}>123 4567 890</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


function App() {
    return (
        <div className="w-full h-full relative">
            <div className={"absolute relative top-0 left-0 -z-10"}>
                <img src={heroBackground} alt="House"/>
                <div className="absolute top-0 bottom-0 left-0 right-0 bg-primary-800/60"></div>
            </div>
            <div className={"absolute top-0 left-0 w-full"}>
                <NavBar/>
            </div>
        </div>
    );
}

export default App;
