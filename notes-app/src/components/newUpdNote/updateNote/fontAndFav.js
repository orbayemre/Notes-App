import {useEffect, useRef} from "react";
import {useSelector,useDispatch} from "react-redux";
import {setFont,setIsFavorite} from "../../../stores/updTemp";
export default function FontFav () {
    const {font,isFavorite} = useSelector(state => state.updTempStore);
    const dispatch = useDispatch();
    const fontRef = useRef();
    const favRef = useRef();
    const changeFont = (e) =>{
        dispatch(setFont(e.target.value));
    }
    const changeFav = (e) =>{
        dispatch(setIsFavorite(e.target.checked));
    }
    useEffect(()=>{
        fontRef.current.value = font;
        favRef.current.checked = isFavorite;
    })
    return(
        <div className="w-3/4 mr-5 flex justify-between items-center ">
            <select ref={fontRef} onChange={changeFont} className="w-60 bg-light shadow-type1 rounded ml-5 p-1 outline-none" name="font" id="font">
                <option value="font1" defaultValue>font1</option>
                <option value="font2" >font2</option>
                <option value="font3">font3</option>
                <option value="font4">font4</option>
                <option value="font5">font5</option>
            </select>
            <label  className="text-sm font-Signika flex justify-center items-center space-x-2 rounded-3xl">
                <input ref={favRef} onChange={changeFav} type="checkbox" />
                <span>Add to Your Favorites</span>
            </label>
        </div>
    )
}