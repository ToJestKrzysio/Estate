import envelopeOpen from "../assets/EnvelopeOpen.svg";

export function SocialEmail() {
    return (
        <div className={"w-10 h-10 flex items-center gap-x-3 cursor-pointer group/email"}>
            <img className={"origin-center group-hover/email:scale-110"} src={envelopeOpen} alt={"Envelope Open"}/>
            <span className={"hidden lg:inline text-sm text-white whitespace-nowrap origin-center group-hover/email:scale-105"}>
                example@example.com
            </span>
        </div>
    )
}