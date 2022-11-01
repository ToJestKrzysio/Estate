export function NavigationItem({text}) {
    return (
        <button
            className={"px-2 mx-2 py-3 md:py-2 my-1 text-md md:text-sm whitespace-nowrap text-gray-600 md:text-white rounded-md origin-center hover:scale-110 hover:bg-gray-300/10"}
        >
            {text}
        </button>
    )
}