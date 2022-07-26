import NoteFooter from "./noteFooter"

export default function Note({note}){
    return(
        <div id={note.id} className={"inline-block w-1/4 xl:w-1/4 lg:w-1/3 md:w-2/5 phone:w-2/5 miniPhone:w-full h-60 mx-5 my-3 rounded-b-xl  text-dark relative shadow-type3 "
            +note.color+"Note "
            +note.font}>
            <h1 className={"font-semibold text-2xl ml-3 py-2 overflow-hidden "
                + (note.font === "mochiy" ? "text-lg":"")}>
            {note.title}
            </h1>
            <div className={"px-3 pt-1 h-3/5 overflow-auto noteScroll "
                + (note.font === "mochiy" ? "text-sm":"")}>
                <p>{note.text}</p>

            </div>
            <NoteFooter date = {note.date} id = {note.id}/>

        </div>
    )
}
