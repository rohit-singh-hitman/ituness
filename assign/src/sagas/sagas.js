import { call, put,takeLatest } from 'redux-saga/effects'
import Apicall from '../Api/Apifetch';
import {actions} from '../Types/types';
import {Creator}  from '../Types/types';
//import {REQUEST_SONGS} from '../Types/types';
//console.log(songs);


function* fetchData(action) {
    console.log('hello')
   try {
    //console.log(REQUEST_SONGS);
      console.log(action.datas);
      const value = yield call(Apicall,action.datas);
      console.log(value);
      //matlab yaha tak chal rha hai     

       yield put(Creator.songs(value));
      // console.log(Creator.songs);
      
   } catch (e) {
      console.log(e);
   }
}



 function* mySaga() {
  yield takeLatest(actions.REQUESTSONGS, fetchData);
}

export default mySaga;
