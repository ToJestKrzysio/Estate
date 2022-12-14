export function NavigationItem({text, border}) {
    const styles = border ? "md:px-4 md:ml-2 my-0 md:mb-1 md:border border-white hover:bg-gray-300/10" : "mx-2 md:py-2 my-1"
    const hover = "transition ease-in-out origin-center hover:scale-110 hover:bg-gray-300/10"
    return (
        <button
            className={`px-2 py-3 text-md md:text-sm whitespace-nowrap text-gray-600 md:text-white rounded-md ${hover} ${styles}`}
        >
            {text}
        </button>
    )
}
