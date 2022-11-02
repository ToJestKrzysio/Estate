import {Background} from "./Background";
import lakeHouse from "../assets/LakeHouse.jpg";
import {PropertiesTitle} from "./PropertiesTitle";
import {PropertyMiniature} from "./PropertyMiniature";
import washington from "../assets/Washington.jpg";
import clinton from "../assets/Clinton.jpg";
import franklin from "../assets/Franklin.jpg";
import arlington from "../assets/Arlington.jpg";
import centerville from "../assets/Centerville.jpg";

export function Properties({applyBlur}) {
    return (
        <div className={"w-screen h-full relative "}>
            <Background src={lakeHouse} alt={"Lake House"} className={applyBlur}/>
            <div className="absolute top-4 md:top-28 bottom-0 inset-x-0 flex flex-col items-center justify-evenly">
                <PropertiesTitle className={applyBlur}/>
                <div className="w-3/4 grid grid-cols-2 md:grid-cols-3 gap-4">
                    <PropertyMiniature src={washington} alt={"Washington Properties"} className={applyBlur}/>
                    <PropertyMiniature src={clinton} alt={"Clinton Properties"} className={applyBlur}/>
                    <PropertyMiniature src={franklin} alt={"Franklin Properties"} className={`hidden md:block ${applyBlur}`}/>
                    <PropertyMiniature src={arlington} alt={"Arlington Properties"} columns={2} className={applyBlur}/>
                    <PropertyMiniature src={franklin} alt={"Franklin Properties"} className={`block md:hidden ${applyBlur}`}/>
                    <PropertyMiniature src={centerville} alt={"Centerville Properties"}/>
                </div>
            </div>
        </div>
    )
}