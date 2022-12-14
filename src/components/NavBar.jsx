import {SocialEmail} from "./SocialEmail";
import {SocialItem} from "./SocialItem";
import facebook from "../assets/facebook.svg";
import social1 from "../assets/social_1.svg";
import instagram from "../assets/instagram.svg";
import social2 from "../assets/social_2.svg";
import {SocialPhone} from "./SocialPhone";
import logo from "../assets/logo.svg";
import {NavigationItem} from "./NavigationItem";
import cross from "../assets/cross.svg";
import {Burger} from "./Burger";


export function NavBar({burgerOpen, burgerOpenSet}) {
    return (
        <div className={"flex flex-col relative h-screen md:h-auto"}>
            <div className={`flex md:hidden justify-between w-screen px-4 py-3 ${burgerOpen ? "blur-sm" : ""}`}>
                <img className="h-10 cursor-pointer" src={logo} alt={"Company Logo"}/>
                <Burger onClick={() => burgerOpenSet(!burgerOpen)} onBlur={() => burgerOpenSet(false)}/>
            </div>
            <div className={"hidden md:flex justify-end md:justify-between w-full px-2 md:px-10 lg:px-20 pt-5 md:pt-7 pb-4 md:border-b border-white"}>
                <SocialEmail/>
                <div className={"flex items-center"}>
                    <div className={"flex gap-x-2 md:gap-x-0"}>
                        <SocialItem src={facebook} alt={"facebook"}/>
                        <SocialItem collapse={true} src={social1} alt={"social 1"}/>
                        <SocialItem src={instagram} alt={"instagram"}/>
                        <SocialItem collapse={true} src={social2} alt={"social 2"}/>
                        <SocialPhone/>
                    </div>
                </div>
            </div>
            <div
                className={`${burgerOpen ? "right-0" : "-right-[100%]"} md:flex z-10 bg-white md:bg-transparent absolute md:sticky top-0 w-[70%] sm:w-[60%] md:w-full md:px-10 lg:px-20 pt-4 md:pt-6 lg:justify-between h-screen md:h-auto duration-500`}
            >
                <img
                    className={"w-10 h-10 block md:hidden ml-auto mr-4 p-3 cursor-pointer origin-center hover:scale-110 hover:bg-gray-300/10 rounded-md mb-4 md:mb-0"}
                    src={cross} alt="Close"/>
                <img className={"hidden lg:block cursor-pointer h-11 w-30"} src={logo} alt={"Company Logo"}/>
                <div className={"flex flex-col-reverse md:justify-end md:flex-row w-full md:h-auto"}>
                    <NavigationItem text={"ABOUT US"}/>
                    <NavigationItem text={"AGENTS"}/>
                    <NavigationItem text={"PROPERTIES"}/>
                    <NavigationItem text={"GALLERY"}/>
                    <NavigationItem text={"CONTACT"}/>
                    <NavigationItem text={"SEARCH"}/>
                    <NavigationItem border={true} text={"ADD LISTING"}/>
                </div>
            </div>
        </div>
    )
}

