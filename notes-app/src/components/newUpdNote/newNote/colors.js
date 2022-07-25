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
            <div ref={parent} className="flex flex-col justify-center items-center h-30 mt-6 absolute right-16 top-0 space-y-4">
                    <span onClick={() => setColour("red")} id="red" className="bg-red-600 w-9 h-9 align-middle rounded-full shadow-type1 flex justify-center items-center">
                        <img className="opacity-0 duration-100" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                    <span onClick={() => setColour("blue")} id="blue" className="bg-blue-600 w-9 h-9 align-middle rounded-full shadow-type1  flex justify-center items-center">
                        <img className="opacity-0 duration-100" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                    <span onClick={() => setColour("green")} id="green" className="bg-green-600 w-9 h-9 align-middle rounded-full shadow-type1  flex justify-center items-center">
                        <img className="opacity-0 duration-100" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                    <span onClick={() => setColour("yellow")} id="yellow" className="bg-yellow-300 w-9 h-9 align-middle rounded-full shadow-type1  flex justify-center items-center">
                        <img className="opacity-0 duration-100" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                    <span onClick={() => setColour("pink")} id="pink" className="bg-pink-500 w-9 h-9 align-middle rounded-full shadow-type1  flex justify-center items-center">
                        <img className="opacity-0 duration-100" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
               
            </div>
        </>
    )
};
