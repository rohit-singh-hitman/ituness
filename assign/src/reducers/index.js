import {combineReducers} from 'redux';


// some reducers you have already created
import songs from './song_reducer';



const rootReducer = combineReducers({
    songs,
});
export default rootReducer;








