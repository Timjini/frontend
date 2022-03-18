import React from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';



export default class Request extends React.Component {
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

  render (){
  return (
    <> 
    <Container>
        {
          this.state.requests
            .map(request =>
          <Card><Card.Header>Featured</Card.Header>
              <Card.Body>
                <Card.Title>{request.address}</Card.Title>
                <Card.Text>
                  {request.description}
                </Card.Text>
                
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
              </Card> 
              )}
      </Container>
    </>

  )
}
}