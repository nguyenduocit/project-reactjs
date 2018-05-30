import * as types from './../constants/ActionTypes';

var data = JSON.parse(localStorage.getItem('tasks'));
var initialState = data ? data :  [];

var s4 = () => {
    return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
}
// hàm tạo mới id
var generateId = () =>{
    return  s4()+ s4()+ s4()+  s4()+ s4()+
     s4()+ s4()+ s4()+ s4()+ s4()+ s4()+ s4()+ s4();
}

var myReducer = (state = initialState, action) => {
   switch(action.type) {
       case types.LIST_ALL :
            return state;
       break;
       case types.ADD_TASK:
            var newTask = {
                id : generateId(),
                name : action.task.name,
                status : action.task.status === "true" ? true : false
            }
            state.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(state));
            // return kiểu này để tránh  tham chiếu tới các giá trị
            return [...state];
        break;
       default : return state;

   }
}

export default myReducer;