import burger from "../assets/burger.svg";

export function Burger({onClick: handleClick, onBlur: handleBlur}) {
    return (
        <button onClick={handleClick} onBlur={handleBlur}>
            <img className={"block md:hidden w-10 h-10 p-2 cursor-pointer hover:bg-gray-500/10 rounded-md"} src={burger} alt="Menu"/>
        </button>
    )
}