import {Background} from "./Background";
import house1 from "../assets/Arlington.jpg";
import {Title} from "./Title";
import {Button} from "./Button";

export function Hero({applyBlur}) {
    return (
        <div className={"w-screen h-full relative"}>
            <Background className={applyBlur} src={house1} alt={"House"}/>
            <div className={`absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ${applyBlur}`}>
                <Title/>
            </div>
            <div className={`absolute top-[80%] left-[50%] -translate-x-2/4 ${applyBlur}`}>
                <div className={"flex flex-col md:flex-row w-screen justify-center gap-x-6 gap-y-4"}>
                    <Button primary={true} text={"Rent"}/>
                    <Button primary={false} text={"Buy"}/>
                </div>
            </div>
        </div>
    );
}