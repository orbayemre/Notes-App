import New from "./new";
import Search from "./search";
import Favorites from "./favorites";

export default function NavBar(){
    return(
        <div className="flex justify-center items-center w-3/4 space-x-10 m-auto my-8">
            <New/>
            <Search/>
            <Favorites/>
        </div>
    );
}