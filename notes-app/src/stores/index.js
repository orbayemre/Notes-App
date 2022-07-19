import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './notes';
import tempReducer from './temp';

export default configureStore({
    reducer: {
        notesStore : notesReducer,
        tempStore : tempReducer
    },
})