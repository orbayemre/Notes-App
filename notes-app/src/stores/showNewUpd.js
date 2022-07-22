import {createSlice} from "@reduxjs/toolkit";

export const showNewUpd = createSlice({
    name:'searchNotes',
    initialState:{
        showNew: false,
        showUpd : false
    },
    reducers:{
        showNew : state =>{
            state.showNew = true;
        },
        showUpd : state =>{
            state.showUpd = true;
        },
        hideNew : state =>{
            state.showNew = false;
        },
        hideUpd : state =>{
            state.showUpd = false;
        }
    }
})

export const {showNew,showUpd,hideNew,hideUpd} = showNewUpd.actions;

export default showNewUpd.reducer;