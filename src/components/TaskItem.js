import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskItem extends Component {

	// gửi ra ngoài biến id
	onUpdateStatus = () => {
		this.props.onUpdateStatus(this.props.task.id);
	}
	// gửi ra ngoài biến id
	onDelete = () => {
		this.props.onDelete(this.props.task.id);
		this.props.onCloseForm();
	}

	// cap nhat du lieu
	onUpdate = () => {
		this.props.onOpenForm();
		this.props.onUpdate(this.props.task);
	}

	render() {

		var { task, index } =  this.props;
		return (
			<tr>
                <td>{ index }</td>
                <td>{ task.name}</td>
                <td className="text-center" >
                    <span 
                    	className= { task.status === true ? 'label label-success' : 'label label-danger'}
                    	onClick = {this.onUpdateStatus}
                    >
                        { task.status === true ? 'Kích hoạt' : 'Ẩn'}
                    </span>
                </td>
                <td className="text-center">
                    <button 
                    	type = "button" 
                    	className ="btn btn-warning"
                    	onClick = { this.onUpdate }
                	>
                        <span className="fa fa-pencil mr-5"></span>Sửa
                    </button>
                    &nbsp;
                    <button 
                    	type="button" 
                    	className="btn btn-danger"
                    	onClick = { this.onDelete }
                	>
                        <span className="fa fa-trash mr-5"></span>Xóa
                    </button>
                </td>
            </tr>
		);
	}
}
const mapStateToProps = () => {
	return {};
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onUpdateStatus : (id) => {
			dispatch(actions.updateStatus(id));
		},
		onDelete : (id) => {
			dispatch(actions.onDelete(id));
		},
		onOpenForm : () => {
			dispatch(actions.openForm());
		},
		onCloseForm : () => {
			dispatch(actions.closeForm());

		},
		onUpdate : (task) => {
			dispatch(actions.onUpdate(task));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);
