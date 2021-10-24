import { createSlice } from "@reduxjs/toolkit"

const initialState = { // state
    cars: [ "Model S", "Model 3", "Model X", "Model Y" ]
}

const carSlice = createSlice({ // action
    name: "car", // slice name
    initialState, // car name
    reducers: {} // ?
})

export const selectCars = state => state.car.cars

export default carSlice.reducer // new state (state, action)
