import Note from "./note";
import AddNote from "./addNote";
import {useSelector} from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react'

export default function Notes(){
    const {notes} = useSelector(state => state.notesStore);
    const {searchNotes,listFav} = useSelector(state => state.searchNotesStore);
    const listNotes = (listFav === false) ? 
    notes.filter(note => note.title.slice(0,searchNotes.length).toUpperCase() === searchNotes.toUpperCase()) :
    notes.filter(note => note.title.slice(0,searchNotes.length).toUpperCase() === searchNotes.toUpperCase() && note.isFavorite === true) ;

    const [animationParent] = useAutoAnimate()
    return(
        <div className="flex justify-center items-center">
            <div ref={animationParent} className="flex flex-wrap justify-start items-center w-full xl:w-3/4 md:w-full xl:m-auto xl:px-4 lg:pl-32 md:pl-10 phone:pl-5 phone:w-full miniPhone:px-5">
                {listNotes.map((note)=><Note note={note} key={note.id} />)}
                <AddNote/>
            </div>
        </div>
    );
}