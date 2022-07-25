import {Provider} from "react-redux";
import store from "../stores";
import NavBar from "./navBar";
import Notes from "./notesList";
import "../css/index.css";
import NewUpdNote from "./newUpdNote";

export default function App() {
  return (
    <Provider store={store}>
      <div className="w-full h-screen dark:bg-dark duration-200">
        <NavBar/>
        <Notes/>
        <NewUpdNote/>
      </div>
    </Provider>
  );
}
