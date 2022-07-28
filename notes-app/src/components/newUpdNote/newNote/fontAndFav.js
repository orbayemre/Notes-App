import {useRef,useState} from "react";
import {useDispatch} from "react-redux";
import {setFont, setIsFavorite} from "../../../stores/newTemp";

export default function FontFav () {
    const [fontState ,setFontState] = useState("signika")
    const dispatch = useDispatch();
    const font = useRef();
    const fav = useRef();
    const changeFont = (e) => {
        dispatch(setFont(e.target.value));
        setFontState(e.target.value);
    }
    const changeFav = (e) => {
        dispatch(setIsFavorite(e.target.checked));
    }
    return(
        <div className="w-10/12  flex justify-between items-center ">
            <select ref={font} onChange={changeFont} className={"w-60 bg-light shadow rounded ml-5 p-1 outline-none " +
                "dark:bg-lightDark dark:text-white dark:border-0 "+fontState} name="font" id="font">
                <option className="signika" value="signika" defaultValue>Signika</option>
                <option className="eduNsw" value="eduNsw" >Edu NSW ACT Foundation</option>
                <option className="mochiy" value="mochiy">Mochiy Pop One</option>
                <option className="titillium" value="titillium">Titillium</option>
                <option className="cormorant" value="cormorant">Cormorant Garamond</option>
            </select>
            <label className="text-sm font-Signika flex justify-center items-center space-x-2 rounded-3xl
            dark:text-white">
                <input ref={fav} onChange={changeFav} type="checkbox"/>
                <span>Add to Your Favorites</span>
            </label>
        </div>
    )
}