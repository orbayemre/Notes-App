import NoteFooter from "./noteFooter"

export default function Note({note}){


    return(
        <div className="inline-block w-1/5 h-60 mx-5 my-3 bg-red-500 rounded-xl  text-den relative shadow-type3">
            <h1 className="font-semibold text-2xl ml-3 py-2  overflow-hidden">
            {note.title}
            </h1>
            <p className="px-3 pt-1 overflow-hidden">
                {note.text}
            </p>
            <NoteFooter date = {note.date}/>

        </div>
    )
}
