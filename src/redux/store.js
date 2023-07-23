import {createStore} from "redux"
import procductReducer from "./reducers/productReducer"


const store = createStore(procductReducer);


export default store;