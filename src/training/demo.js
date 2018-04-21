//tạo store
import { createStore } from 'redux';
// import action 
import {status, sort } from './actions/index'
// tach reducers
import myReducer from './reducers/index'

//tạo ra store từ createStore
const store = createStore(myReducer);
console.log('Default',store.getState());
// // thực hiện công việc thay đổi status
// var action = {type : 'TOGGLE_STATUS'};

// từ store truyền vào action
store.dispatch(status());

console.log('TOGGLE_STATUS',store.getState());

// // thực hiện công việc sắp xếp theo tên
// var sortAction = {
//     type : 'SORT',
//     sort : {
//         by : 'name',
//         value : -1
//     }
// }
 store.dispatch(sort({
     by :'status',
     value : -1
 }));

console.log('SORT_ACTIONS',store.getState());
