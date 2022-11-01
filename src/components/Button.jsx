export function Button({text, primary}) {
    const styles = primary ? "bg-primary-400 hover:bg-primary-500 text-white" : "bg-white hover:opacity-90 text-primary-400"
    const hoverStyles = "transition ease-in-out origin-center hover:scale-105"
    return (
        <button className={`mx-auto md:mx-0 w-[80%] md:w-44 py-2 rounded-md ${hoverStyles} ${styles}`}>
            {text}
        </button>
    );
}