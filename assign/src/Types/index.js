import {combineReducers} from 'redux';

//import {Creators as songs} from '../Types/types';
import songs from './types';

const rootReducer = combineReducers({
    songs,
});
export default rootReducer;
