import { useDispatch } from "react-redux";
import { setSearchNotes } from "../../stores/searchNotes";
import {useEffect} from "react";

var i = 0;
var placeholder = "";
const txt = "Search your notes here ...";
const type = ()=>{
    placeholder += txt.charAt(i);
    document.getElementById("searchInput").setAttribute("placeholder",placeholder);
    i++;
    setTimeout(type,80);
}

export default function Search(){
    const dispatch = useDispatch();

    const searching = (e) =>{
        dispatch(setSearchNotes(e.target.value));
    }
    useEffect(()=>{
        type();
    })
    return(
        <div className="w-1/2" >
            <input onChange={searching} className="inline-block bg-search w-full h-6 py-4 px-4 font-Signika outline-none rounded-r-lg
            hover:shadow-type1 focus:shadow-type1 duration-200
            dark:hover:shadow-type4 dark:focus:shadow-type4 dark:placeholder-dark" type="text" id="searchInput"/>
            <label htmlFor="searchInput" ></label>
        </div>
    )
}