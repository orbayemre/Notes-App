import {createSlice} from "@reduxjs/toolkit";

export const notes = createSlice({
    name:'notes',
    initialState:{
        notes:localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []
    },
    reducers:{
        addNote : (state,action) => {
            state.notes.push(action.payload);
        },
        removeNote : (state,action) => {
            const temp = action.payload.notes.filter(note => note.id !== action.payload.id);
            state.notes = temp;
            localStorage.setItem("notes",JSON.stringify(temp));
        },
    }
})

export const {addNote,removeNote} = notes.actions;

export default notes.reducer;
