import Note from "./note";
import AddNote from "./addNote";
import {useSelector} from 'react-redux';


export default function Notes(){
    const {notes} = useSelector(state => state.notesStore)
    return(
        <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-start items-center w-3/4 m-auto px-4">
                {notes.map((note)=><Note note={note} key={note.id} />)}
                <AddNote/>
            </div>
        </div>
    );
}