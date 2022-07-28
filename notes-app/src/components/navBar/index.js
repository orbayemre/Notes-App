import New from "./new";
import Search from "./search";
import Favorites from "./favorites";
import DarkMode from "./darkMode";
import {useEffect, useState} from "react";
import { Squash as Hamburger } from 'hamburger-react';

export default function NavBar(){
    const [isOpen, setOpen] = useState(false)
    useEffect(()=>{
        console.log(isOpen);
        if(isOpen){
            document.getElementById("menuToggle").classList.remove("phone:hidden");
            document.getElementById("menuToggle").classList.add("phone:inline-block");
        }
        else{
            document.getElementById("menuToggle").classList.add("phone:hidden");
            document.getElementById("menuToggle").classList.remove("phone:inline-block");
        }

    },[isOpen])
    return(
        <div className="flex relative justify-center items-center w-3/4 xl:m-auto lg:w-4/5 lg:mx-4  md:ml-0 md:space-x-5 phone:w-full space-x-10 py-8">
            <New/>
            <Search/>
            <div id="menuToggle" className="phone:hidden phone:absolute phone:flex phone:justify-center phone:bg-add phone:dark:bg-lightDark phone:shadow-type1
                phone:dark:shadow-type5 phone:w-48 phone:h-32 phone:rounded-b-xl phone:right-5 z-10">
                <Favorites/>
                <DarkMode/>
            </div>
            <div className="absolute hidden phone:inline-block right-5 -top-2 z-20 dark:text-white">
                <Hamburger size={20}  toggled={isOpen} toggle={setOpen}   rounded/>
            </div>
        </div>
    );
}