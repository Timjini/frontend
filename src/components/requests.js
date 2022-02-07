import React from 'react';
import axios from 'axios';

export default class Requests extends React.Component {
  state = {
    requests: []
  }

  componentDidMount() {
    axios.get(`http://mighty-tor-35081.herokuapp.com/api/v1/requests`)
      .then(res => {
        const requests = res.data;
        this.setState({ requests });
      })
  }

  render() {
    return (
        <div className='container' style={{padding: "10rem"}}>
      <ul>
        {
          this.state.requests
            .map(request =>
           
              <li >{request.id} | {request.description} \ {request.address}</li>
              
            )
        }
             
      </ul>
      </div>
    )
  }
}