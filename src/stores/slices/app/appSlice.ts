import { initalStateAppInterface, PageLoadingActionInterface } from "@/types/slices/appSliceTypes";
import { createSlice } from "@reduxjs/toolkit";
const initialState: initalStateAppInterface = {
    loading: false,
    pageLoading: false,
}
const appSlice = createSlice({
    name: "DADAN",
    initialState,
    reducers: {
        SET_PAGE_LOADING(state, { payload }: PageLoadingActionInterface) {
            state.pageLoading = payload;
        }
    }
});

export const { SET_PAGE_LOADING } = appSlice.actions;

export default appSlice.reducer;