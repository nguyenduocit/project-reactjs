import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as actions from './../actions/index';


class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            status:false
        }
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        if (name === 'status') {
            value = target.value === 'true' ? true : false;
        }

        this.setState({
            [name] : value
        });

    }

    onSubmit = (event) => {
        event.preventDefault();
        // this.props.onSubmit(this.state);
        this.props.onAddTask(this.state);
        // Cancel anh Close From
        this.props.onCloseForm({
            id: '',
            name: '',
            status: false
        });
        
        
    }

    onCloseForm = () => {
        this.props.onCloseForm()
    }

    // cap nhat lai state 
    componentWillMount() {
        if(this.props.task) {

            this.setState({
                id: this.props.task.id,
                name: this.props.task.name,
                status: this.props.task.status

           });

        }
    }

    // componentkhi mởi lên rồi vẫn nhận được props
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        // kiểm tra nextProps
        if(nextProps && nextProps.updateItem) {

            this.setState({
                id: nextProps.updateItem.id,
                name: nextProps.updateItem.name,
                status: nextProps.updateItem.status

           });

        } else if(!nextProps.updateItem) {
            this.setState({
                id:'',
                name:'',
                status:false
            });
        }
    }

  render() {

    if(!this.props.actionForm) return null;
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    { this.state.id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
                </h3>
                <span 
                    className = 'fa fa-times-circle text-right mg-t-17'
                    onClick =  {this.onCloseForm}
                    
                ></span>
            </div>
            <div className="panel-body">
                <form onSubmit= {this.onSubmit}>
                    <div className="form-group">
                        <label>Tên :</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name='name' 
                            onChange = {this.onHandleChange}
                            value = {this.state.name}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select 
                        className="form-control" 
                        required="required" 
                        name='status'
                        onChange = { this.onHandleChange }
                        value = { this.state.status }
                    >
                        <option value={true}>Kích Hoạt</option>
                        <option value={false}>Ẩn</option>
                    </select>
                    <br/>
                    <div className="text-center">
                        <button type="submit" className="btn btn-warning">
                        { this.state.id !== '' ? 'Cập nhật' : 'Thêm'}
                        </button>&nbsp;
                        <button 
                            type="reset" 
                            className="btn btn-danger"
                            onClick = { this.onClear}
                        >Hủy Bỏ</button>
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

const mapStateToProps = state => {
    return {
        actionForm: state.actionForm,
        updateItem: state.updateItem
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddTask : (task) => {
            dispatch(actions.addTask(task));
        },
        onCloseForm : () => {
			dispatch(actions.closeForm());

        },
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(TaskForm);
