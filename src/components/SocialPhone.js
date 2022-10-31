import phone from "../assets/Phone.svg";

export function SocialPhone() {
    return (
        <div className={"flex h-full items-center md:pl-6 md:border-l cursor-pointer group/phone"}>
            <img src={phone} className={"m-2 w-[24px] h-[24px] origin-center group-hover/phone:scale-110"} alt="Phone"/>
            <span className={"hidden md:inline text-white whitespace-nowrap ml-6 origin-center group-hover/phone:scale-110"}>123 4567 890</span>
        </div>
    )
}