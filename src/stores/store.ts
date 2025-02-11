import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "@slice/counter/counterSlice";
import appSlice from "@slice/app/appSlice";
const store = configureStore({
    reducer: {
        counter: counterSlice,
        app: appSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;