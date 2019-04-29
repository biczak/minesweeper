import { combineReducers } from 'redux';

import gameBoard from './boardReducers';

const rootReducer = combineReducers({ gameBoard });

export default rootReducer;
