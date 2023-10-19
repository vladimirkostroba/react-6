import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";
// Начальное значение состояния Redux для корневого редюсера,
// если не передать параметр preloadedState.


const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);



