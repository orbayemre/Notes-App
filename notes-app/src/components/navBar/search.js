import { useDispatch } from "react-redux";
import { setSearchNotes } from "../../stores/searchNotes";

export default function Search(){
    const dispatch = useDispatch();

    const searching = (e) =>{
        dispatch(setSearchNotes(e.target.value));
    }
    return(
        <div className="w-1/2" >
            <input onChange={searching} className="inline-block bg-search w-full h-6 py-4 px-4 font-Signika outline-none rounded-lg 
            hover:shadow-type1 duration-200" type="text" placeholder="Search your notes here ..."/>
        </div>
    )
}