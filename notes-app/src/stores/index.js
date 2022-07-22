import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notes';
import newTempReducer from './newTemp';
import searchNotesReducer from './searchNotes';
import updTempReducer from "./updTemp"
import showNewUpdReducer from "./showNewUpd"

export default configureStore({
    reducer: {
        notesStore : notesReducer,
        newTempStore : newTempReducer,
        searchNotesStore : searchNotesReducer,
        updTempStore : updTempReducer,
        showNewUpdStore : showNewUpdReducer,
    },
})