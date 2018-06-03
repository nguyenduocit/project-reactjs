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

// lấy ra danh sách các task 
var findIndex = (tasks , id) => {
    var result  = -1;
    tasks.forEach((task, index) => {
        if (task.id === id) {
            result =  index;
        } 
    });
    return result;
}

var myReducer = (state = initialState, action) => {
   switch(action.type) {
       case types.LIST_ALL :
            return state;

       case types.ADD_TASK:
            var task = {
                name : action.task.name,
                status : action.task.status === "true" ? true : false
            }
            console.log(task);
            if(!action.task.id) {
                task.id = generateId(),
                // lưu dữ liệu vào state , chuyển đối dữ liệu  sang dạng json
                state.push(task);
            } else {
               var index = findIndex(state, task.id);
               state[index] = task;
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            // return kiểu này để tránh  tham chiếu tới các giá trị
            return [...state];
        case types.UPDATE_STATUS:
            var id = action.id;
            var index = findIndex(state, id);
            state[index] = {
                ...state[index],
                status : !state[index].status
            }
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
        case types.ON_DELETE :
            var id = action.id;
            var index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('tasks', JSON.stringify(state));
            return [...state];
       default : return state;
   }
}

export default myReducer;