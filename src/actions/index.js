import * as types from './../constants/ActionTypes';
// xử lý sự kiện show danh sách 
export const listAll = () => {
    return {
        type : types.LIST_ALL
    }
}
// xử lý sự kiện thêm dữ liệu có truyền tham số
export const addTask = (task) => {
    return {
        type : types.ADD_TASK,
        task // task:task
    }
}
// xử lý sự kiện đóng mở form
export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
}
// xử lý sự kiện đóng form
export const closeForm = () => {
    return {
        type: types.CLOSE_FORM
    }
}
// xử lý sự kiện mở form
export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
}

// xử lý sự kiện update status
export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS,
        id,
    }
}

// xử lý sự kiện xóa item
export const onDelete = (id) => {
    return {
        type: types.ON_DELETE,
        id,
    }
}

// xử lý sự kiện xóa item 
export const onUpdate = (task) => {
    return {
        type: types.ON_UPDATE,
        task,
    }
}
// xử lý tìm kiếm 
export const filterTask =(filter) => {

    return {
        type:  types.FILTER_TABLE,
        filter // filter : filter -> filterName, filterStatus
    }
}
