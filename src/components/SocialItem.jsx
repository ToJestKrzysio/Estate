export function SocialItem({src, alt}) {
    return (
        <img className={"cursor-pointer transition ease-in-out duration-300 origin-center hover:scale-125 mr-0 md:mr-4"} src={src} alt={alt}/>
    )
}