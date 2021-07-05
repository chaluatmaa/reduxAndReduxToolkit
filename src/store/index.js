import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authreducer from "./authSlice";

const store = configureStore({
	reducer: {
		counter: counterReducer,
		auth: authreducer,
	},
});

export default store;
