import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			// id : unique
			// name , status
			taskEditing : null,
			filter: {
				name:'',
				status:-1
			},
			keyword:'',
			sortBy :'name',
			sortValue: 1
		}
	}
	
	// mở form thêm data
	onToggleForm = () => {
		this.props.onToggleForm();
		this.onClearForm();
	}

	// đóng form thêm data
	onCloseForm = () => {
		this.props.onCloseForm();
	}

	//mở form
	onOpenForm = () => {
		this.props.onOpenForm();
	}

	// cap nhat du lieu
	onUpdate = (id) => {
		var { tasks } = this.state;
		var index = this.findIndex(id);
		var taskEditing = tasks[index];
		//console.log(taskEditing);
		this.setState({
			taskEditing : taskEditing
			
		});
		this.onOpenForm();
		//console.log(this.state.taskEditing);
	}
	// 
	onFilter = (filterName, filterStatus) => {
		filterStatus = parseInt(filterStatus, 10);

		this.setState({
			filter:{
				name:filterName.toLowerCase(),
				status:filterStatus
			}
		})
		
	}

	// chuc nang tim kiem
	onSearch = (keyword) => {
		//console.log(keyword);
		this.setState({
			keyword : keyword.toLowerCase()
		});
	}

	// chuc sang sap xep 
	onSort = (sortBy, sortValue) => {
		this.setState({
			sortBy :sortBy,
			sortValue: sortValue
		});
	}

	onClear = () => {
        this.setState({
            id:'',
            name : '',
            status: false

        })
    }

  render() {

	var { 
			filter, 
			keyword,
			sortBy,
			sortValue
		}  = this.state; // var tasks = this.state.tasks

	var { actionForm } =  this.props;
	// if(filter) {
	// 	if(filter.name) {
	// 		tasks = tasks.filter((task) => {
	// 			return task.name.toLowerCase().indexOf(filter.name) !== -1;
	// 		});
	// 	}

	// 	tasks = tasks.filter((task) => {
	// 		if(filter.status === -1) {
	// 			return task;
	// 		} else {
	// 			return task.status === (filter.status === 1 ? true : false );
	// 		}
	// 	});
	// }
	// if (sortBy === 'name') {

	// 	tasks.sort((a,b) =>{
	// 		if(a.name > b.name) return sortValue;
	// 		else if(a.name < b.name) return -sortValue;
	// 		else return 0
	// 	});
	// } else {

	// 	tasks.sort((a,b) =>{
	// 		if(a.status > b.status) return -sortValue;
	// 		else if(a.status < b.status) return sortValue;
	// 		else return 0
	// 	});

	// }
	

	// if(keyword) {
	// 	tasks = tasks.filter((task) => {
	// 		return task.name.toLowerCase().indexOf(keyword) !== -1;
	// 	});

	// 	// tasks = filter(tasks, (task) => {
	// 	//    return  task.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
	// 	// });
	// }

	return (
		<div className="container">
			<div className="text-center">
				<h1>Quản Lý Công Việc</h1>
				<hr/>
			</div>
			<div className="row mt-15">
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
				<TaskForm/> 
				</div>
				<div className= { actionForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
					<button 
						type="button" 
						className="btn btn-primary" 
						onClick= { this.onToggleForm }
					>
						<span className="fa fa-plus mr-5"></span>Thêm Công Việc
					</button>
					<Control 
						onSearch={this.onSearch}
						onSort = {this.onSort}
						sortBy = {sortBy}
						sortValue = {sortValue}
					/>
					<div className="row mt-15">
						<TaskList  
							onFilter = { this.onFilter}
						/>
					</div>
				</div>
			</div>
		</div>
	);
  }
}

const mapStateToProps = (state) => {
	return {
		actionForm: state.actionForm
	};
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onToggleForm : () => {
			dispatch(actions.toggleForm());
		},
		onOpenForm : () => {
			dispatch(actions.openForm());
		},
		onCloseForm : () => {
			dispatch(actions.closeForm());

		},
		onClearForm: (task) => {
			dispatch(actions.onUpdate(task));
		}

	};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
