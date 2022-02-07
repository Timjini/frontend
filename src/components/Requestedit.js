import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Select from "react-select";


class RequestEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        description: '',
        address: '',
        category: [{value: 0 , lable: 'This is lable 1'}, {value: 1 , lable: 'this is lable two'}],
        status: parseInt(),
        latitude: parseFloat(),
        longitude: parseFloat(),
    };
  }
  changeHandler = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state)
   axios.post('http://mighty-tor-35081.herokuapp.com/api/v1/requests', this.state)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    const { description, address, category, status } = this.state;
    return (
      <div className="container ">
       <div className="panel panel-default">
         <div className="panel-heading">
            <h3 className="panel-title">
              New Request
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/requests"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> All Requests</Link></h4>
            <form onSubmit={this.submitHandler}>
             <div className="form-group">
               <label htmlFor="name">description:</label>
               <input type="text" className="form-control" value={description} name="description" onChange={this.changeHandler}/>
              </div>
              <div className="form-group">
               <label htmlFor="email">address:</label>
                <input type="text" className="form-control" value={address} name="address" onChange={this.changeHandler}/>
              </div>

          <div className="form-group">
          <label>
          Category:
          <Select  value= "0" options={category}  />
        </label>
        </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
          </div>
       </div>
      </div>
    );
      }
    }

export default RequestEdit;