// khoi tao state ban dau
var inittialState = false;
// tao ra 1 cais reducer va cac state ban dau 
var myReducer = (state = inittialState, action) => {
    if(action.type === 'TOGGLE_STATUS') {
        state = !state;
        return state;
    }
    return state;
}

export default myReducer;