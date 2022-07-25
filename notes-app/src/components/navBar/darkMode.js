import {useEffect, useState} from "react";

export default function DarkMode(){
    const [darkMode,setDarkMode] = useState(
        localStorage.getItem("darkMode") ? (localStorage.getItem("darkMode") === "true" ? true:false) : false
    );
    const changeDarkMode = (e) =>{
        localStorage.setItem("darkMode",e.target.checked);
        setDarkMode(e.target.checked);
        if(e.target.checked){document.body.class ="dark"}
        else{document.body.class = "";}
    }
    useEffect(()=>{
        if(darkMode){document.body.classList.add("dark")}
        else{document.body.classList.remove("dark");}
    })
    return(
        <div className="btn-container absolute -right-40">
            <i className="fa fa-sun-o" aria-hidden="true"></i>
            <label className="switch btn-color-mode-switch">
                <input onClick={changeDarkMode} type="checkbox" name="color_mode" id="color_mode" value="1" defaultChecked={darkMode}/>
                <label htmlFor="color_mode" data-on="Dark" data-off="Light" className="btn-color-mode-switch-inner">
                </label>
            </label>
        </div>
    )
}