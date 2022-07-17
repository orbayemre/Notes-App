import NavBar from "./navBar";
import Notes from "./notesList";
import "../css/index.css";

export default function App() {
  return (
    <div className="w-full">
      <NavBar/>
      <Notes/>
    </div>
  );
}
