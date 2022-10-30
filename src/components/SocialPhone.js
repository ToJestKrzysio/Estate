import phone from "../assets/Phone.svg";

export function SocialPhone() {
    return (
        <div className={"flex h-full items-center pl-6 border-l cursor-pointer group/phone"}>
            <img src={phone} className={"w-[24px] h-[24px] origin-center group-hover/phone:scale-110"} alt="Phone"/>
            <span className={"text-white whitespace-nowrap ml-6 group-hover/phone:scale-105"}>123 4567 890</span>
        </div>
    )
}