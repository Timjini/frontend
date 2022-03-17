import React from 'react';
import axios from 'axios';
//import Requestdelete from './Requestdelete';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


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
    <Container maxWidth="sm">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="green iguana"
      />
      <CardContent>

      {
          this.state.requests
            .map(request =>
              <>
        <Typography gutterBottom variant="h5" component="div">
        {request.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {request.description}
        </Typography>
        </>
                    )
        }
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Container>
  )
}
}