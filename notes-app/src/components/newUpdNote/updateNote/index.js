import Inputs from "./inputs"
import Colors from "./colors"
import FontFav from "./fontAndFav"
import SaveClose from "./saveClose"

import {useEffect,useRef} from "react";
import {useDispatch} from "react-redux";
import {hideUpd} from "../../../stores/showNewUpd";
import {setAllNull} from "../../../stores/newTemp";


export default function NewNote(){
    const close = useRef();
    useOutsideAlerter(close);
    const dispatch = useDispatch();

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    dispatch(hideUpd());
                    dispatch(setAllNull());
                    document.getElementById("updTitle").value="";
                    document.getElementById("updText").value="";
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
            <div ref={close} id="updComp" className="z-30 w-2/5 xl:w-2/5 xl:left-1/3 lg:w-2/4 lg:left-60 md:w-4/5 md:left-20 phone:w-full h-96 bg-light shadow  rounded fixed top-1/4
            dark:bg-dark dark:shadow-xl dark:shadow-white/5">
                <Inputs/>
                <Colors/>
                <FontFav/>
                <SaveClose/>
            </div>
        </>
    )
}