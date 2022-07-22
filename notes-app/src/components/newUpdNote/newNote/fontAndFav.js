import { useRef } from "react";
import {useDispatch} from "react-redux";
import {setFont,setIsFavorite} from "../../../stores/newTemp";

export default function FontFav () {
    const dispatch = useDispatch();
    const font = useRef();
    const fav = useRef();
    const changeFont = (e) => {
        dispatch(setFont(e.target.value));
    }
    const changeFav = (e) => {
        dispatch(setIsFavorite(e.target.checked));
    }
    return(
        <div className="w-3/4 mr-5 flex justify-between items-center ">
            <select ref={font} onChange={changeFont} className="w-60 bg-light shadow-type1 rounded ml-5 p-1 outline-none" name="font" id="font">
                <option value="font1" defaultValue>font1</option>
                <option value="font2" >font2</option>
                <option value="font3">font3</option>
                <option value="font4">font4</option>
                <option value="font5">font5</option>
            </select>
            <label className="text-sm font-Signika flex justify-center items-center space-x-2 rounded-3xl">
                <input ref={fav} onChange={changeFav} type="checkbox"/>
                <span>Add to Your Favorites</span>
            </label>
        </div>
    )
}