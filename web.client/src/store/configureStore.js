import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import geminiApp from '../reducers';
import logger from 'redux-logger'

export default function configureStore(initialState) {
    return createStore(geminiApp, initialState, applyMiddleware(thunk));
}
