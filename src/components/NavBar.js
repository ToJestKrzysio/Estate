import {SocialEmail} from "./SocialEmail";
import {SocialItem} from "./SocialItem";
import facebook from "../assets/facebook.svg";
import social1 from "../assets/social_1.svg";
import burger from "../assets/burger.svg";
import instagram from "../assets/instagram.svg";
import social2 from "../assets/social_2.svg";
import {SocialPhone} from "./SocialPhone";
import logo from "../assets/logo.svg";
import {NavigationItem} from "./NavigationItem";
import {NavigationButton} from "./NavigationButton";
import {useState} from "react";

function Burger({onClick: handleClick, onBlur: handleBlur}) {
    return (
        <button onClick={handleClick} onBlur={handleBlur}>
            <img className={"block md:hidden w-10 h-10 p-2 cursor-pointer"} src={burger} alt="Menu"/>
        </button>
    )
}


export function NavBar() {
    const [burgerActive, burgerActiveSet] = useState(false);

    return (
        <div className={"flex flex-col bg-primary-700 md:bg-transparent"}>
            <div className={"flex justify-end md:justify-between w-full px-2 md:px-10 lg:px-20 pt-5 md:pt-7 pb-4 md:border-b-[0.5px]"}>
                <SocialEmail/>
                <div className={"flex items-center"}>
                    <div className={"flex gap-x-2 md:gap-x-0"}>
                        <SocialItem src={facebook} alt={"facebook"}/>
                        <SocialItem collapse={true} src={social1} alt={"social 1"}/>
                        <SocialItem src={instagram} alt={"instagram"}/>
                        <SocialItem collapse={true} src={social2} alt={"social 2"}/>
                        <SocialPhone/>
                        <Burger onClick={() => burgerActiveSet(!burgerActive)} onBlur={() => burgerActiveSet(false)}/>
                    </div>
                </div>
            </div>
            <div className={`${burgerActive ? "" : "hidden"} md:flex justify-center lg:justify-between w-full md:px-10 lg:px-20 pt-6`}>
                <div className={"hidden lg:block cursor-pointer h-11 w-30"}>
                    <img src={logo} alt={"Company Logo"}/>
                </div>
                <div className={"flex flex-col-reverse md:justify-end md:flex-row w-screen"}>
                    <NavigationItem text={"ABOUT US"}/>
                    <NavigationItem text={"AGENTS"}/>
                    <NavigationItem text={"PROPERTIES"}/>
                    <NavigationItem text={"GALLERY"}/>
                    <NavigationItem text={"CONTACT"}/>
                    <NavigationItem text={"SEARCH"}/>
                    <NavigationButton text={"ADD LISTING"}/>
                </div>
            </div>


        </div>
    )
}

