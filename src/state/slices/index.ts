import { combineReducers } from "redux";
import charactersSlice from "./charactersSlice";
import characterByIdSlice from "./characterByIdSlice";

export const rootReducer = combineReducers({
	characters: charactersSlice,
	characterById: characterByIdSlice,
});
