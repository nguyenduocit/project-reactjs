//tạo store 
import { createStore } from 'redux';

// khoi tao state ban dau
var inittialState = {
    status : false,
    sort : {
        by : 'name',
        value : 1

    }
}
// tao ra 1 cais reducer va cac state ban dau 
var myReducer = (state = inittialState, action) => {
    if(action.type === 'TOGGLE_STATUS') {
        state.status = !state.status;
        return state;
    }

    if(action.type === 'SORT') {
        console.log(action);
        var { by , value } = action.sort; //by = action.by
        var { status } = state; // status = state.status
    //    state.sort.by = action.sort.by;
    //    state.sort.value = action.sort.value;
       // cung co the viet
    //    state.sort = {
    //        by : action.sort.by,
    //        value : action.sort.value
    //     }
    }
    return {
        status : status,
        sort : {
            by : by,
            value : value
        }
    }
}

//tạo ra store từ createStore
const store = createStore(myReducer);
console.log('Default',store.getState());
// thực hiện công việc thay đổi status
var action = {type : 'TOGGLE_STATUS'};

// từ store truyền vào action
store.dispatch(action);

console.log('TOGGLE_STATUS',store.getState());

// thực hiện công việc sắp xếp theo tên
var sortAction = {
    type : 'SORT',
    sort : {
        by : 'name',
        value : -1
    }
}
 store.dispatch(sortAction);

console.log('SORT_ACTIONS',store.getState());
