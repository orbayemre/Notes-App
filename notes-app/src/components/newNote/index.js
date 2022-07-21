import Inputs from "./inputs"
import Colors from "./colors"
import FontFav from "./fontAndFav"
import SaveClose from "./saveClose"

import { useRef,useEffect } from "react"
import {useDispatch } from "react-redux";
import {setAllNull} from "../../stores/newTemp";

export default function NewNote(){
    const close = useRef();
    useOutsideAlerter(close);
    const dispatch = useDispatch();

    function useOutsideAlerter(ref) {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                close.current.style.transform = "scale(0)";
                dispatch(setAllNull());
                document.getElementById("title").value="";
                document.getElementById("text").value="";
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
    return(
        <>
            <div ref={close} id="newComp" className="scale-0 z-30 w-2/5 h-96 bg-light shadow-type2  rounded fixed top-1/4 left-1/3">
                <Inputs/>
                <Colors/>
                <FontFav/>
                <SaveClose/>
            </div>
            
            <div id="blur" className="z-20 w-full h-full hidden backdrop-blur-sm top-0 left-0"></div>
        </>
    )
}