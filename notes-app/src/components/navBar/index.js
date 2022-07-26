import New from "./new";
import Search from "./search";
import Favorites from "./favorites";
import DarkMode from "./darkMode";

export default function NavBar(){
    return(
        <div className="flex justify-center items-center relative w-3/4 xl:m-auto lg:w-4/5 lg:mx-4  md:ml-0 md:space-x-5 space-x-10 py-8">
            <New/>
            <Search/>
            <Favorites/>
            <DarkMode/>
        </div>
    );
}