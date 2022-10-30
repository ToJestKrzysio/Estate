export function NavigationButton({text}) {
    return (
        <button className={
            "px-4 py-3 font-light text-sm whitespace-nowrap text-white border rounded-md  hover:bg-gray-300/10 origin-center hover:scale-105"
        }>
            {text}
        </button>
    )
}