import { useSelector,useDispatch } from "react-redux";
import {addNote} from "../../../stores/notes";
import {setAllNull} from "../../../stores/newTemp";
import {hideNew} from "../../../stores/showNewUpd";

export default function SaveClose() {
    
    const {id,title,text,date,color,font,isFavorite} = useSelector(state => state.newTempStore);
    const {notes} = useSelector(state => state.notesStore);
    const dispatch = useDispatch();

    const closeComp = () =>{
        dispatch(hideNew());
        dispatch(setAllNull());
        document.getElementById("newTitle").value="";
        document.getElementById("newText").value="";
    }
    const saveStore = () => {
        dispatch(addNote({id,title,text,date,color,font,isFavorite}));
        localStorage.setItem("notes",JSON.stringify([...notes,{id,title,text,date,color,font,isFavorite}]))
        dispatch(setAllNull());
        document.getElementById("newTitle").value="";
        document.getElementById("newText").value="";
        dispatch(hideNew());
        
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