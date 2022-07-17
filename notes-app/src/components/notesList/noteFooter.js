import { useRef,useEffect } from "react";

export default function NoteFooter ({date}){

    const settings = useRef();
    useOutsideAlerter(settings);

    const setSettings = ()=>{
        console.log(settings)
        settings.current.style.transform = settings.current.style.transform == "scale(1)" ?  "scale(0)" :"scale(1)";
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                settings.current.style.transform = "scale(0)";
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
      }
      
    return(
        <div className="flex justify-between items-center w-5/6 ml-3 pt-1 box-border border-t border-den absolute bottom-2 text-xs">
                <span>{date}</span>
                <svg onClick={setSettings} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 p-1 box-content rounded-full hover:bg-red-400 duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
                <div  ref={settings}  className="scale-0 flex flex-col justify-center items-center w-20 h-14 duration-200 box-content bg-light rounded shadow shadow-gray-400 absolute z-10 bottom-6 -right-16 font-Signika">
                    <div className="w-full h-1/2 flex cursor-pointer duration-100 px-3 pt-2 rounded-t hover:bg-add"> 
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    <span className="pl-2">Edit</span>
                    </div>

                    <div className="w-full h-1/2 flex cursor-pointer duration-100 px-3 pt-1 rounded-b hover:bg-add">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <span  className="pl-2 text-red-600">Delete</span>
                    </div>
                </div>
        </div>
    )
}