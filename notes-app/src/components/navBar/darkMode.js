import {useEffect, useState} from "react";
import toast from "react-hot-toast";

export default function DarkMode(){
    const [darkMode,setDarkMode] = useState(
        localStorage.getItem("darkMode") ? (localStorage.getItem("darkMode") === "true") : false
    );
    const changeDarkMode = (e) =>{
        localStorage.setItem("darkMode",e.target.checked);
        setDarkMode(e.target.checked);
        if(e.target.checked){
            document.body.class ="dark";
            document.body.style.background = "#2C3333";
            toast('Hello Darkness!',
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                    },
                }
            );
        }
        else{
            document.body.class = "";
            document.body.style.background = "white";
            toast('Welcome Back Light Mode!',
                {
                    icon: '👏',
                    style: {
                        borderRadius: '10px',
                        background: 'white',
                        color: '#2C3333',
                    },
                }
            );
        }
    }
    useEffect(()=>{
        if(darkMode){
            document.body.classList.add("dark");
            document.body.style.background = "#2C3333";
        }
        else{
            document.body.classList.remove("dark");
            document.body.style.background = "white";
        }
    })
    return(
        <div className="btn-container absolute bottom-8 xl:-right-20 lg:-right-28 md:-right-40 phone:bottom-2 phone:items phone:z-10">
            <i className="fa fa-sun-o" aria-hidden="true"></i>
            <label className="switch btn-color-mode-switch">
                <input onClick={changeDarkMode} type="checkbox" name="color_mode" id="color_mode" value="1" defaultChecked={darkMode}/>
                <label htmlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner">
                </label>
            </label>
        </div>
    )
}