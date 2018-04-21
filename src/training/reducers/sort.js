// khoi tao state ban dau
var inittialState =  {
        by : 'status',
        value : 1

    }
// tao ra 1 cais reducer va cac state ban dau 
var myReducer = (state = inittialState, action) => {
    
    if(action.type === 'SORT') {
        var { by , value } = action.sort; //by = action.by
        return {by , value};
    }
    return state;
}

export default myReducer;