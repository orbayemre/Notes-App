import {useEffect,useRef} from "react";
import {useSelector,useDispatch} from "react-redux";
import {setTitle,setText} from "../../../stores/updTemp";
export default function Inputs (){
    const {title,text} = useSelector(state => state.updTempStore);
    const dispatch = useDispatch();
    const titleRef = useRef();
    const textRef = useRef();
    const changeTitle = (e) =>{
        dispatch(setTitle(e.target.value));
    }
    const changeText= (e) =>{
        dispatch(setText(e.target.value));
    }
    useEffect(()=>{
        titleRef.current.value = title;
        textRef.current.value = text;
    })
    return(
        <div>
            <input onChange={changeTitle} id="updTitle" ref={titleRef}
            className="outline-none w-3/4 h-8 rounded shadow text-sm my-3 pl-2 mx-4 border placeholder:font-Signika" type="text" placeholder="Enter your note title here ..."></input>
            <textarea onChange={changeText}  id="updText" ref={textRef}
            className="outline-none w-3/4 h-30 resize-none rounded shadow text-sm my-3 pt-3 px-2 mx-4 border placeholder:font-Signika" rows="10" placeholder="Enter your note description here ..."></textarea>
        </div>
    )
}