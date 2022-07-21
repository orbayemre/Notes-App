import Note from "./note";
import AddNote from "./addNote";
import {useSelector} from 'react-redux';


export default function Notes(){
    const {notes} = useSelector(state => state.notesStore);
    const {searchNotes,listFav} = useSelector(state => state.searchNotesStore);
    const listNotes = (listFav === false) ? 
    notes.filter(note => note.title.slice(0,searchNotes.length) === searchNotes) :
    notes.filter(note => note.title.slice(0,searchNotes.length) === searchNotes && note.isFavorite === true) ;
    return(
        <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-start items-center w-3/4 m-auto px-4">
                {listNotes.map((note)=><Note note={note} key={note.id} />)}
                <AddNote/>
            </div>
        </div>
    );
}