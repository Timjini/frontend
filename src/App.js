import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Requests from './components/requests';
import { useEffect, useState } from 'react';

const API_URL ="https://mighty-tor-35081.herokuapp.com/api/v1/requests";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data)
}

function App() {
  const [requests, setRequests] = useState([]);

  useEffect (() => {
    let mounted = true;
    getAPIData().then((items) => {
      if (mounted) {
        setRequests(items);
      }
  });
  return () => (mounted = false);
}, []);

  return (
    <div className="App">
      <h1>Hello</h1>
      <Requests requests={requests} />
    </div>
  );
}

export default App;
