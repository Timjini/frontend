import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class RequestEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
        description: '',
        address: '',
        category: parseInt(),
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
      <div className="container">
       <div className="panel panel-default">
         <div className="panel-heading">
            <h3 className="panel-title">
              Send Message
            </h3>
          </div>
          <div className="panel-body">
            <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Message List</Link></h4>
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
          <select value={this.state.value} onChange={this.handleChange}>
            <option value={category}>One time </option>
            <option value={category}>Material </option>
          </select>
        </label>
        </div>
          <div className="form-group">
            <label htmlFor="description">status:</label>
            <input type="text" className="form-control" value={status} name="status" onChange={this.changeHandler}/>
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