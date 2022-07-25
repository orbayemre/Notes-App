import {useEffect, useRef,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {setFont,setIsFavorite} from "../../../stores/updTemp";
export default function FontFav () {
    const {font,isFavorite} = useSelector(state => state.updTempStore);
    const [fontState ,setFontState] = useState(font)
    const dispatch = useDispatch();
    const fontRef = useRef();
    const favRef = useRef();
    const changeFont = (e) =>{
        dispatch(setFont(e.target.value));
        setFontState(e.target.value);
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
            <select ref={fontRef} onChange={changeFont} className={"w-60 bg-light shadow-type1 rounded ml-5 p-1 outline-none " +
                "dark:bg-lightDark dark:text-white dark:border-0 "+fontState} name="font" id="font">
                <option className={"signika"} value="signika" defaultValue>Signika</option>
                <option className={"eduNsw"} value="eduNsw" >Edu NSW ACT Foundation</option>
                <option className={"mochiy"} value="mochiy">Mochiy Pop One</option>
                <option className={"titillium"} value="titillium">Titillium</option>
                <option className={"cormorant"} value="cormorant">Cormorant Garamond</option>
            </select>
            <label  className="text-sm font-Signika flex justify-center items-center space-x-2 rounded-3xl
            dark:text-white">
                <input ref={favRef} onChange={changeFav} type="checkbox" />
                <span>Add to Your Favorites</span>
            </label>
        </div>
    )
}