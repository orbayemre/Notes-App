import NewNote from "./newNote";
import UpdNote from "./updateNote"
import {useSelector} from "react-redux";

export default function NewUpdNote(){
    const {showNew,showUpd} = useSelector(state => state.showNewUpdStore);
    return(
        <>
            {showNew && <NewNote/>}
            {showUpd && <UpdNote/>}

        </>
    )
}