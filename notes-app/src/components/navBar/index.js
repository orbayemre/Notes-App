import New from "./new";
import Search from "./search";
import Favorites from "./favorites";
import DarkMode from "./darkMode";

export default function NavBar(){
    return(
        <div className="flex justify-center items-center relative w-3/4 space-x-10 m-auto py-8">
            <New/>
            <Search/>
            <Favorites/>
            <DarkMode/>
        </div>
    );
}