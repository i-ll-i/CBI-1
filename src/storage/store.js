import {
    createStore ,
    combineReducers
} from 'redux';

import {
    reducerArticles,
    reducerEditor
} from './reducer/reducer.js'

const allReducers = combineReducers(
    {
        reducerArticles,
        reducerEditor
    }
);

const store = createStore( allReducers );

export default store;