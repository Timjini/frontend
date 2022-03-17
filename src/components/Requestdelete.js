import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

export default class Requestdelete extends React.Component {
  state = {
    id: ''
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.delete(`http://localhost:3001/requests/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
          <button type="submit" onSubmit={this.handleSubmit} onChange={this.handleChange} >Delete</button>
    )
  }
}