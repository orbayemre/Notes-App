import {useDispatch} from "react-redux";
import {setDate, setId} from "../../stores/newTemp";
import {showNew} from "../../stores/showNewUpd";
import { nanoid } from 'nanoid'

export default function New(){
    
    const dispatch = useDispatch();
    
    const showNewComp = () =>{
        dispatch(showNew());
        dispatch(setDate());
        dispatch(setId(nanoid()));
    }
    return(
        <div onClick={showNewComp}  className="bg-new font-Signika w-8 h-5 border border-new text-white rounded-lg py-2 px-5 box-content flex justify-center items-center cursor-pointer
        hover:shadow-type1 hover:bg-white hover:text-new duration-200
        dark:opacity-80 dark:hover:bg-dark dark:text-dark dark:hover:text-new ">
           <span>New</span> 
        </div>
    )
}