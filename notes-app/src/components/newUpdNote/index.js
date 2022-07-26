import NewNote from "./newNote";
import UpdNote from "./updateNote"
import {useSelector} from "react-redux";
import {Toaster} from "react-hot-toast";

export default function NewUpdNote(){
    const {showNew,showUpd} = useSelector(state => state.showNewUpdStore);
    return(
        <>
            {showNew && <NewNote/>}
            {showUpd && <UpdNote/>}

            <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions ={{duration : 2000,}} />
        </>
    )
}