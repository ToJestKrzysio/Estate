export function NavigationButton({text}) {
    return (
        <button
            className={"px-2 md:px-4 py-3 my-0 md:my-1 text-md md:text-sm whitespace-nowrap text-gray-600 md:text-white md:border rounded-md hover:bg-gray-300/10 origin-center hover:scale-110"}
        >
            {text}
        </button>
    )
}