import { combineReducers } from "redux";
import cellReducer from "./cellReducer";
import bundlesReducer from "./bundlesReducer";

const reducer = combineReducers({
  cells: cellReducer,
  bundles: bundlesReducer,
});

export default reducer;

export type RootState = ReturnType<typeof reducer>;
