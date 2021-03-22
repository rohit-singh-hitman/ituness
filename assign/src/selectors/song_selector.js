import {createSelector} from 'reselect';



const selectSong =state=>state.songs;



export const selectsongitems=createSelector(
    [selectSong],
    songs=>songs
    
    );
   