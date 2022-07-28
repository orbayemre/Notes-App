import { useDispatch } from "react-redux"
import { setListFav } from "../../stores/searchNotes"
export default function Favorites(){
    const dispatch = useDispatch()
    return(
        <div className="font-Signika w-30 h-6 p-2 box-content flex justify-center items-center cursor-pointer space-x-2
            phone:z-10 phone:mt-8">
            <input onClick={()=> dispatch(setListFav())} type="checkbox" id="switch"/> <label id="switchLabel" htmlFor="switch"></label>
            <label htmlFor="switch" className="dark:text-white phone:default:text-dark">Only Favorites</label>
        </div>
    )
}