import { createSlice } from "@reduxks/toolkit"

const initialState = {
    cars: [ "Model S", "Model 3", "Model X", "Model Y" ]
}

const carSlice = createSlice({
    name: "car", // slice name
    initialState, // car name
    reducers: {} // ?
})

export const 
