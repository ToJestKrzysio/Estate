export function Button({text, primary}) {
    const styles = primary ? "bg-primary-400 text-white" : "bg-white text-primary-400"
    return (
        <button className={`mx-auto md:mx-0 w-[80%] md:w-44 py-2 rounded-md ${styles}`}>
            {text}
        </button>
    );
}