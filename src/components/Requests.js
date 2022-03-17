import React from 'react';
import axios from 'axios';
//import Requestdelete from './Requestdelete';
import Button from '@mui/material/Button';


export default class Requests extends React.Component {
  state = {
    requests: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/requests`)
      .then(res => {
        const requests = res.data;
        this.setState({ requests });
      })
  };

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
        <div className='container' style={{padding: "10rem"}}>
      <ul>
        {
          this.state.requests
            .map(request =>
              <>
              <li >{request.user_id} | {request.description} \ {request.address}</li>
              <Button type="submit" onSubmit={this.handleSubmit} onChange={this.handleChange}  variant="contained">Delete</Button>
              </>
            )
        }
             
      </ul>

      </div>
    )
  }
}