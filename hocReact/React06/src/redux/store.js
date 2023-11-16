import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./reducers/counterReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
