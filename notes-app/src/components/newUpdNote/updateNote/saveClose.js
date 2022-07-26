import {useDispatch,useSelector} from "react-redux";
import {hideUpd} from "../../../stores/showNewUpd";
import {setAllNull} from "../../../stores/newTemp";
import {setDate} from "../../../stores/updTemp";
import {updateNote} from "../../../stores/notes";
import toast from "react-hot-toast";

export default function SaveClose() {
    const dispatch = useDispatch();
    const {id,title,text,date,color,font,isFavorite} = useSelector(state => state.updTempStore);
    const {notes} = useSelector(state => state.notesStore);

    const closeComp = () =>{
        dispatch(hideUpd());
        dispatch(setAllNull());
        document.getElementById("updTitle").value="";
        document.getElementById("updText").value="";
        toast.error("Your note could not update.")
    }
    const saveStore = () => {
        dispatch(setDate());
        const updNote={id,title,text,date,color,font,isFavorite};
        dispatch(updateNote({notes,updNote}));
        dispatch(hideUpd());

        toast.success('Your note updated!');
    }
    return(
        <div className="flex justify-center items-center">

        <button onClick={saveStore} className="flex justify-center items-center w-1/4 h-5 mt-5 py-3 border border-green-500 text-white bg-green-500 rounded-2xl shadow-type2 m-auto
        hover:bg-white hover:text-green-500
        dark:text-dark dark:hover:bg-dark dark:hover:text-green-500 duration-200">
            <span>Save</span>
        </button>
    
        <button onClick={closeComp} className="flex justify-center items-center w-1/4 h-5 mt-5 py-3 border border-red-500 text-white bg-red-500 rounded-2xl shadow-type2 m-auto
        hover:bg-white hover:text-red-500
        dark:text-dark dark:hover:bg-dark dark:hover:text-red-500 duration-200">
            <span>Cancel</span>
        </button>
        </div>
    )
};
