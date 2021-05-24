import switchPageReducer from './switch-page';

import { combineReducers } from 'redux';

const reducers = combineReducers({
    switchPage: switchPageReducer
});

export default reducers;