import {useDispatch} from "react-redux";
import {setDate,setId,setColor,setFont} from "../../stores/temp";
import { nanoid } from 'nanoid'

export default function AddNote(){
    const dispatch = useDispatch();
    const toggleNewComp = () =>{
        const newComp =document.getElementById("newComp");
        newComp.style.transform = newComp.style.transform === "scale(1) " ?  "scale(0)" :"scale(1)";
        
        dispatch(setDate());
        dispatch(setId(nanoid()));
        dispatch(setColor("red"));
        dispatch(setFont("font1"));

    }
    return(
        <div onClick={toggleNewComp} className="flex justify-center items-center w-40 h-40 ml-10 rounded-full cursor-pointer bg-light shadow-type2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2 w-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
        </div>
    )
}