import { createSlice } from "@reduxjs/toolkit";


const teamSlice = createSlice({
    name: "team",
    initialState: {
        value: [""]
    },
    reducers: {
        addToTeam: (state, action) => {
            console.log(action.payload)
            state.value.push(action.payload)
        },
        removeFromTeam: (state, action) => {
            state.value = state.value.filter(pokemon => pokemon !== action.payload)
        }
    }
});

export const {addToTeam, removeFromTeam} = teamSlice.actions

export default teamSlice.reducer
