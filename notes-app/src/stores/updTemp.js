import {createSlice} from "@reduxjs/toolkit";

export const temp = createSlice({
    name:'temp',
    initialState:{
        id:"",
        title : "",
        text : "",
        date : "",
        color : "",
        font :"signika",
        isFavorite : false
    },
    reducers:{
        setId : (state,action) =>{
            state.id = action.payload
        },
        setTitle: (state,action) => {
            state.title = action.payload;
        },
        setText: (state,action) => {
            state.text = action.payload;
        },
        setDate: (state) => {
            const now = new Date();
            state.date = now.toLocaleDateString();
        },
        setColor: (state,action) => {
            state.color = action.payload;
        },
        setFont: (state,action) => {
            state.font = action.payload;
        },
        setIsFavorite: (state,action) => {
            state.isFavorite = action.payload;
        },
        setAll : (state,action) =>{
            state.title = action.payload.title;
            state.text = action.payload.text;
            state.date = action.payload.date;
            state.color = action.payload.color;
            state.font = action.payload.font;
            state.isFavorite = action.payload.isFavorite;
        },
        setAllNull : state =>{
            state.title = "";
            state.text = "";
            state.date = "";
            state.color = "";
            state.font = "";
        }
    }
})

export const {setId,setTitle,setText,setDate,setColor,setIsFavorite,setFont,setAllNull,setAll} = temp.actions;

export default temp.reducer;