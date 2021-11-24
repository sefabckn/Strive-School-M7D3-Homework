import { configure } from '@testing-library/react'
import {createStore} from 'redux'
import MainReducer from '../reducers'

export const initialState = {

    favs : {
        content:[]
    }
}

const configureStore = createStore(MainReducer, initialState,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default configureStore 