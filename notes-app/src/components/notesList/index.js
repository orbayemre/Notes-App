import Note from "./note";
import AddNote from "./addNote";
const notes = [
    {
        'id': 1,
        'title': "Note title",
        'text' : "Note text Note text Note text Note text Note text Note text Note text Note text Note text",
        'date' : "13.04.2022",
        'color': "blue",
        'font' : "arial",
        'isFavorite' : false
    },
    {
        'id': 2,
        'title': "Note title",
        'text' : "Note text",
        'date' : "13.04.2022",
        'color': "blue",
        'font' : "arial",
        'isFavorite' : false
    },
    {
        'id': 3,
        'title': "Note title",
        'text' : "Note text",
        'date' : "13.04.2022",
        'color': "blue",
        'font' : "arial",
        'isFavorite' : false
    },
    {
        'id': 4,
        'title': "Note title",
        'text' : "Note text",
        'date' : "13.04.2022",
        'color': "blue",
        'font' : "arial",
        'isFavorite' : false
    },
    {
        'id': 5,
        'title': "Note title",
        'text' : "Note text",
        'date' : "13.04.2022",
        'color': "blue",
        'font' : "arial",
        'isFavorite' : false
    },
]

export default function Notes(){
    return(
        <div className="flex justify-center items-center">
            <div className="flex flex-wrap justify-start items-center w-3/4 m-auto px-4">
                {notes.map((note)=><Note note={note} key={note.id} />)}
                <AddNote/>
            </div>
        </div>
    );
}