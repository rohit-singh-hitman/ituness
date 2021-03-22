import {SONGS} from '../actions/index';


export default function songs(state = [],action) {
   switch(action.type) {
       case SONGS:
           console.log("Songs are ",action.items);
           return action.items;
        default:
            return state;
   }
}


