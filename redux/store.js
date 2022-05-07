import { legacy_createStore as createStore, compose } from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer, {});
