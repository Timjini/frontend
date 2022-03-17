import React, { Component } from "react";
import axios from "axios";
//import { useHistory } from "react-router-dom";



export default class Requestadd extends Component {
  constructor(props){
    super(props)

    this.state = {
      address: '',
      description: '',
    }
  }

  handleChange = (e) => {
    this.setState({ 
      [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3001/requests`, this.state)
    .then(response =>{
      console.log(response)
    })
  }

  render() {
    return (
      <div>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <form onSubmit={this.handleSubmit}>
            <input 
            type="text" 
            name="address" 
            onChange={this.handleChange}
            placeholder="address"
             />
            <input 
            type="text" 
            name="description" 
            onChange={this.handleChange}
            placeholder="description"
             />
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}