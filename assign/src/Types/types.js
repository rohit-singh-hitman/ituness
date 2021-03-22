


import {createActions,createReducer} from 'reduxsauce';
//export const REQUEST_SONGS = "REQUEST_SONGS";
const {Types,Creators}=createActions({
    songs: ['items'],
    requestsongs: ['datas'],
    
});
export const actions=Types;

export const Creator=Creators;
//console.log(requestsongs.action.datas);

console.log(actions);
console.log(Creator.songs); 
export const INITIAL_STATE=[];
export const songs=(state = INITIAL_STATE,action)=>
action.items;
/*
//export const requestsongs=(state = INITIAL_STATE,action)=>[
 //   ...state,{datas:action.payload.datas}
//];
*/
export default createReducer(INITIAL_STATE,{
    [Types.SONGS]:songs,
    
    
})
/*
export const Types={
    SONGS:'RECEIVE_SONGS',
    REQUEST_SONGS:"REQUEST_SONGS"
};



export default function songs(state = [],action) {
   switch(action.type) {
       case Types.SONGS:
           console.log("Songs are ",action.items);
           return action.items;
        default:
            return state;
   }
}


export const Creators ={
songs(items) {
        const action = {
          type:Types.SONGS,
          items,
        };
        return action;
      },
 requestsongs(datas) {
          
          const action = {
            type:Types.REQUEST_SONGS,
            data:datas,
          };
          return action;
        }
};*/