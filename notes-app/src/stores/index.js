import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notes';
import newTempReducer from './newTemp';
import searchNotesReducer from './searchNotes';

export default configureStore({
    reducer: {
        notesStore : notesReducer,
        newTempStore : newTempReducer,
        searchNotesStore : searchNotesReducer,
    },
})