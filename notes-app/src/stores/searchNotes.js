import {createSlice} from "@reduxjs/toolkit";

export const searchNotes = createSlice({
    name:'searchNotes',
    initialState:{
        searchNotes:"",
        listFav : false
    },
    reducers:{
        setSearchNotes : (state,action) =>{
            state.searchNotes = action.payload 
        },
        setListFav : state =>{
            state.listFav = !state.listFav;
        }
    }
})

export const {setSearchNotes,setListFav} = searchNotes.actions;

export default searchNotes.reducer;
