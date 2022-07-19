import {Provider} from "react-redux";
import store from "../stores";
import NavBar from "./navBar";
import Notes from "./notesList";
import NewNote from "./newUpdNote";
import "../css/index.css";

export default function App() {
  return (
    <Provider store={store}>
      <div className="w-full">
        <NavBar/>
        <Notes/>
        <NewNote/>
      </div>
    </Provider>
  );
}
