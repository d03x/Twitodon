import { initalStateCounterInterface } from "@/types/slices/counterSliceType";
import { createSlice } from "@reduxjs/toolkit";
const initialState: initalStateCounterInterface = {
    value: 100
}
const counterSlice = createSlice({
    name: "DADAN",
    initialState,
    reducers: {
        INCREMENT(state) {
            state.value += 1;
        }
    }
})

export default counterSlice.reducer;