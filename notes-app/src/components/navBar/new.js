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
        <div onClick={showNewComp}  className="bg-new font-Signika w-8 h-6 rounded-lg py-2 px-5 box-content flex justify-center items-center cursor-pointer
        hover:shadow-type1 duration-200">
           <span>New</span> 
        </div>
    )
}