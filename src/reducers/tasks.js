import * as types from './../constants/ActionType';
var initalState = [];

var myReducer = (state = initalState, action) => {

    switch(action.type) {
        case types.LIST_ALL:
            return state;
        break;
        default: return state;
    }

}

export default myReducer;