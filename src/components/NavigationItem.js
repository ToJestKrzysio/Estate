export function NavigationItem({text}) {
    return (
        <button
            className={"px-2 mx-2 py-2 my-1 rounded-md text-sm whitespace-nowrap text-white origin-center hover:scale-110 hover:bg-gray-300/10"}
        >{text}</button>
    )
}