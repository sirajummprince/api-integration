import { createStore } from "redux";
import myReducer from "./reducer";
import {composeWithDevTools} from 'react-devtools-extension'

export const store = createStore(myReducer, composeWithDevTools());


