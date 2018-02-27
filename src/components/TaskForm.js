import React, { Component } from 'react';


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
        this.props.onSubmit(this.state);

        // Cancel anh Close From
        this.onClear();
        this.onCloseForm();
        
        
    }

    onCloseForm = () => {
        this.props.onCloseForm()
    }

    onClear = () => {
        this.setState({
            name : '',
            status: false

        })
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
        // kiểm tra nextProps
        if(nextProps && nextProps.task) {

            this.setState({
                id: nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status

           });

        } else if(!nextProps.task) {
            this.setState({
                id:'',
                name:'',
                status:false
            });
        }
    }

    c

  render() {

    var { id } = this.state;
    return (
        <div className="panel panel-warning">
            <div className="panel-heading">
                <h3 className="panel-title">
                    { id !== '' ? 'Cập Nhật Công Việc' : 'Thêm Công Việc'}
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
                        <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
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

export default TaskForm;
