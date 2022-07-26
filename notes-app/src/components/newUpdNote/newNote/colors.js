import { useEffect, useRef, useState } from "react"
import {useDispatch} from "react-redux";
import {setColor} from "../../../stores/newTemp";

export default function Colors() {

    const [color,setColour] = useState("red");
    const parent = useRef();
    const dispatch = useDispatch();

    useEffect(()=>{
        var doc = parent.current;
        for (var i = 0; i < doc.childNodes.length; i++) {
            doc.childNodes[i].children[0].style.opacity = "0";
        }
        document.getElementById(color).children[0].style.opacity = "1";
        dispatch(setColor(color));
    });

    return(
        <>
            <div ref={parent} className="flex flex-col justify-center items-center h-30 mt-6 absolute right-10 top-0 space-y-4">
                    <span onClick={() => setColour("red")} id="red" className="redNote w-9 h-9 align-middle rounded-full shadow-type1 flex justify-center items-center">
                        <img className="opacity-0 duration-100" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                    <span onClick={() => setColour("blue")} id="blue" className="blueNote w-9 h-9 align-middle rounded-full shadow-type1  flex justify-center items-center">
                        <img className="opacity-0 duration-100" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                    <span onClick={() => setColour("green")} id="green" className="greenNote w-9 h-9 align-middle rounded-full shadow-type1  flex justify-center items-center">
                        <img className="opacity-0 duration-100" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                    <span onClick={() => setColour("yellow")} id="yellow" className="yellowNote w-9 h-9 align-middle rounded-full shadow-type1  flex justify-center items-center">
                        <img className="opacity-0 duration-100" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                    <span onClick={() => setColour("pink")} id="pink" className="pinkNote w-9 h-9 align-middle rounded-full shadow-type1  flex justify-center items-center">
                        <img className="opacity-0 duration-100" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
               
            </div>
        </>
    )
};
