import envelopeOpen from "../assets/EnvelopeOpen.svg";

export function SocialEmail() {
    return (
        <div className={"flex items-center gap-x-3 cursor-pointer group/email"}>
            <img className={"origin-center group-hover/email:scale-110"} src={envelopeOpen} alt={"Envelope Open"}/>
            <span className={"text-sm text-white whitespace-nowrap origin-center group-hover/email:scale-105"}>
                <span className={"font-bold"}>Email us at:</span> example@example.com
            </span>
        </div>
    )
}