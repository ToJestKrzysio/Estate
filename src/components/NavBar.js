import {SocialEmail} from "./SocialEmail";
import {SocialItem} from "./SocialItem";
import facebook from "../assets/facebook.svg";
import social1 from "../assets/social_1.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import social2 from "../assets/social_2.svg";
import {SocialPhone} from "./SocialPhone";
import logo from "../assets/logo.svg";
import {NavigationItem} from "./NavigationItem";
import {NavigationButton} from "./NavigationButton";

export function NavBar() {
    return (
        <div className={"flex flex-col"}>
            <div className={"flex justify-between w-full px-20 pt-7 pb-4 border-b-[0.5px]"}>
                <SocialEmail/>
                <div className={"flex items-center"}>
                    <div className={"flex gap-x-4 mr-4"}>
                        <SocialItem src={facebook} alt={"facebook"}/>
                        <SocialItem src={social1} alt={"social 1"}/>
                        <SocialItem src={linkedin} alt={"linkedin"}/>
                        <SocialItem src={instagram} alt={"instagram"}/>
                        <SocialItem src={social2} alt={"social 2"}/>
                    </div>
                    <SocialPhone/>
                </div>
            </div>
            <div className="flex justify-between w-full px-20 pt-6">
                <div className={"cursor-pointer h-11 w-30"}>
                    <img src={logo} alt={"Company Logo"}/>
                </div>
                <div className={"flex"}>
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