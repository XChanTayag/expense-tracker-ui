import {applyMiddleware, compose, createStore} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/index'

const composeSetup =  process.env.NODE_ENV !== "production" &&
typeof window === "object" &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose
const configureStore = () =>
    createStore(
        rootReducer,
        composeSetup(applyMiddleware(thunk))
    )

export default configureStore