import Inputs from "./inputs"
import Colors from "./colors"
import FontFav from "./fontAndFav"
import SaveClose from "./saveClose"

import { useRef,useEffect } from "react"
import {useDispatch } from "react-redux";
import {setAllNull} from "../../../stores/newTemp";
import {hideNew} from "../../../stores/showNewUpd";

export default function NewNote(){
    const close = useRef();
    useOutsideAlerter(close);
    const dispatch = useDispatch();

    function useOutsideAlerter(ref) {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                dispatch(hideNew());
                dispatch(setAllNull());
                document.getElementById("newTitle").value="";
                document.getElementById("newText").value="";
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
            <div ref={close} id="newComp" className="z-30 w-2/5 xl:w-2/5 xl:left-1/3 lg:w-2/4 lg:left-60 md:w-4/5 md:left-20 phone:w-full h-96 bg-light shadow-type2  rounded fixed top-1/4
            dark:bg-dark dark:shadow-type5">
                <Inputs/>
                <Colors/>
                <FontFav/>
                <SaveClose/>
            </div>
        </>
    )
}