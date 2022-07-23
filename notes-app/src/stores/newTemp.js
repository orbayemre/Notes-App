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
        setAllNull : state =>{
            state.title = "";
            state.text = "";
        }
    }
})

export const {setId,setTitle,setText,setDate,setColor,setIsFavorite,setFont,setAllNull} = temp.actions;

export default temp.reducer;
