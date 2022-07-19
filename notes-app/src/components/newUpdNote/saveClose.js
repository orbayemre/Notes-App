import { useSelector,useDispatch } from "react-redux";
import {addNote} from "../../stores/notes";
import {setAllNull} from "../../stores/temp";
export default function SaveClose() {
    
    const {id,title,text,date,color,font,isFavorite} = useSelector(state => state.tempStore);
    const dispatch = useDispatch();

    const closeComp = () =>{
        const newComp =document.getElementById("newComp");
        newComp.style.transform = "scale(0)";
        dispatch(setAllNull());
        document.getElementById("title").value="";
        document.getElementById("text").value="";
    }
    const saveStore = () => {
        dispatch(addNote({id,title,text,date,color,font,isFavorite}));
        dispatch(setAllNull());
        document.getElementById("title").value="";
        document.getElementById("text").value="";
        const newComp =document.getElementById("newComp");
        newComp.style.transform = "scale(0)";
        
    }
    return(
        <div className="flex justify-center items-center">

        <button onClick={saveStore} className="flex justify-center items-center w-1/4 h-5 mt-5 py-3 border border-green-500 text-white bg-green-500 rounded-2xl shadow-type2 m-auto">
            <span>Save</span>
        </button>
    
        <button onClick={closeComp} className="flex justify-center items-center w-1/4 h-5 mt-5 py-3 border border-red-500 text-white bg-red-500 rounded-2xl shadow-type2 m-auto">
            <span>Cancel</span>
        </button>
        </div>
    )
};
