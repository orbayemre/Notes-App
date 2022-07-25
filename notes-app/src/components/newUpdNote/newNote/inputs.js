import {useDispatch,useSelector} from "react-redux";
import {setTitle,setText} from "../../../stores/newTemp";

export default function Inputs ( ){

    const {font} = useSelector(state => state.newTempStore);
    const dispatch = useDispatch();
    const changeTitle = (e)=>{
       dispatch(setTitle(e.target.value))
    }
    const changeText = (e)=>{
        dispatch(setText(e.target.value))
    }
    return(
        <div>
            <input onChange={changeTitle} id="newTitle"
            className={"outline-none w-3/4 h-8 rounded shadow text-sm my-3 pl-2 mx-4 border placeholder:font-Signika " +
                "dark:bg-lightDark dark:border-0 dark:caret-add dark:text-white "+font} type="text" placeholder="Enter your note title here ..."></input>
            <textarea onChange={changeText} id="newText"
            className={"outline-none w-3/4 h-30 resize-none rounded shadow text-sm my-3 pt-3 px-2 mx-4 border placeholder:font-Signika " +
                "dark:bg-lightDark dark:border-0 dark:caret-add dark:text-white "+font} rows="10" placeholder="Enter your note description here ..."></textarea>
        </div>
    )
}