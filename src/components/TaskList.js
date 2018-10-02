import React, { Component } from 'react';
import TaskItem from './TaskItem';
// để lấy được giá trị trên store 
import { connect } from 'react-redux';
import * as actions from './../actions/index';

class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            filterName: '',
            filterStatus: -1, // all -1, active: 1, deactive:0
        }
    }

    // tại task list lên store lấy 

    onChange = (event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        // this.props.onFilter(
        //     name === 'filterName' ? value : this.state.filterName,
        //     name === 'filterStatus' ? value : this.state.filterStatus
        // );
        this.props.onFilterTable(
            name === 'filterName' ? value : this.state.filterName,
            name === 'filterStatus' ? value : this.state.filterStatus
        );

        this.setState({
            [name] : value
        });
    }
	render() {
        
		var { tasks } = this.props; // var task = this.props.tasks
        var { filterName, filterStatus } = this.state;

		var elmTasks = tasks.map((task, index) => {
			return <TaskItem 
				task = { task } 
				key={task.id} 
				index={index}
			/>
		});

		return (
			<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th className="text-center">STT</th>
                            <th className="text-center">Tên</th>
                            <th className="text-center">Trạng Thái</th>
                            <th className="text-center">Hành Động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    name="filterName" 
                                    onChange = {this.onChange}
                                    value = {filterName}
                                />
                            </td>
                            <td>
                                <select 
                                    className="form-control" 
                                    name="filterStatus"
                                    onChange = {this.onChange}
                                    value = {filterStatus}
                                >
                                    <option value={-1}>Tất Cả</option>
                                    <option value={0}>Ẩn</option>
                                    <option value={1}>Kích Hoạt</option>
                                </select>
                            </td>
                            <td></td>
                        </tr>
                        { elmTasks }
                    </tbody>
                </table>
            </div>
		);
	}
}
// lên store lấy danh sách 
const mapStateToProps = (state) => {
    return {
        tasks : state.tasks
    }
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onFilterTable : (filter) => {
            dispatch(actions.filterTask(filter));
        }
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);