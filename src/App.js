import React, { Component } from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state =  {
            username : '',
            password : '',
            desc : '',
            gender: 1,
            lang: 'vi',
            status: false,
        };

        this.onHandleChange = this.onHandleChange.bind(this)
        this.onHandleSubmit = this.onHandleSubmit.bind(this)
    }

    onHandleChange(event) {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name] : value
        })
    }

    onHandleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }
     render() {
        return (
            <div className="container mt-50">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit = { this.onHandleSubmit }>
                                    <div className="form-group">
                                        <label>UserName</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name="username"
                                            onChange= { this.onHandleChange }
                                            value= {this.state.name}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input 
                                            type="password" 
                                            className="form-control"
                                            name="password"
                                            onChange= { this.onHandleChange }
                                            value = {this.state.password}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Mô Tả</label>
                                        <textarea 
                                            name="desc"  
                                            className="form-control" 
                                            rows="3" 
                                            required="required"
                                            onChange= { this.onHandleChange }
                                            value = {this.state.desc}
                                        ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label>Gioi tinh</label>
                                        <select 
                                            name="gender"  
                                            className="form-control" 
                                            value={this.state.gender} 
                                            onChange={this.onHandleChange}
                                        >
                                            <option value={0}>Nu</option>
                                            <option value={1}>Nam</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <div className="radio">
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="lang"  
                                                    value="en"
                                                    onChange={this.onHandleChange}
                                                    checked = {this.state.lang === 'en'}
                                                />
                                                English
                                            </label>
                                            &nbsp;
                                            <label>
                                                <input 
                                                    type="radio" 
                                                    name="lang"  
                                                    value="vi"
                                                    onChange={this.onHandleChange}
                                                    checked = {this.state.lang === 'vi'}
                                                />
                                                VietNamese
                                            </label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                                <input 
                                                    type="checkbox" 
                                                    name="status"  
                                                    value={true}
                                                    onChange={this.onHandleChange}
                                                   checked = {this.state.status === true }
                                                />
                                                Status
                                            </label>
                                    </div>
                                    <div className="form-group">
                                    </div>
                                    <button type="submit" className="btn btn-primary ml-5">Submit</button>
                                    <button type="reset" className="btn btn-warning">Reset</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default App;
