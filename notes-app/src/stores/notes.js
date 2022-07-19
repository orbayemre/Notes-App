import {createSlice} from "@reduxjs/toolkit";

export const notes = createSlice({
    name:'notes',
    initialState:{
        notes:[
            {
                'id': 1,
                'title': "Note title",
                'text' : "Note teascaacaxt Note text Note text Note text Note text Note text Note text Note text Note text",
                'date' : "13.04.2022",
                'color': "blue",
                'font' : "arial",
                'isFavorite' : false
            },
            {
                'id': 2,
                'title': "Note title",
                'text' : "Note text",
                'date' : "13.04.2022",
                'color': "blue",
                'font' : "arial",
                'isFavorite' : false
            },
            {
                'id': 3,
                'title': "Note title",
                'text' : "Note text",
                'date' : "13.04.2022",
                'color': "blue",
                'font' : "arial",
                'isFavorite' : false
            },
            {
                'id': 4,
                'title': "Note title",
                'text' : "Note text",
                'date' : "13.04.2022",
                'color': "blue",
                'font' : "arial",
                'isFavorite' : false
            },
            {
                'id': 5,
                'title': "Note title",
                'text' : "Note text",
                'date' : "13.04.2022",
                'color': "blue",
                'font' : "arial",
                'isFavorite' : false
            }
        ]
    },
    reducers:{
        addNote : (state,action) => {
            state.notes.push(action.payload);
        },
    }
})

export const {addNote} = notes.actions;

export default notes.reducer;
