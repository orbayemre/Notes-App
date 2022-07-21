import { useDispatch } from "react-redux"
import { setListFav } from "../../stores/searchNotes"
export default function Favorites(){
    const dispatch = useDispatch()
    return(
        <div onClick={()=> dispatch(setListFav())} className="bg-favorites font-Signika w-28 h-6 rounded-lg p-2 box-content flex justify-center items-center cursor-pointer
        hover:shadow-type1  duration-200">
           <span>List Favorites</span>
        </div>
    )
}