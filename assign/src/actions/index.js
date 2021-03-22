export const SONGS = "RECEIVE_SONGS";
export const REQUEST_SONGS = "REQUEST_SONGS";
export function songs(items) {
  const action = {
    type:SONGS,
    items,
  };
  return action;
}
export function requestsongs(datas) {
    console.log(datas);
    const action = {
      type:REQUEST_SONGS,
      data:datas,
    };
    return action;
  }









  export const {Types,Creators}=createActions({
    songs: ['items'],
    requestsongs: ['datas'],
    
})

export const types=
//console.log(requestsongs.action.datas);

console.log(Types);
console.log(Creators);
export const INITIAL_STATE=[];
export const songs=(state = INITIAL_STATE,action)=>{
    console.log(action.items)
    return [...state,action.items]
}

export default createReducer(INITIAL_STATE,{
    [Types.SONGS]:songs,
    
})