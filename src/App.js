import './App.css';
import axios from "axios";
import Requests from './components/requests';
import {Routes,Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './components/Home';

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
    <>
      
      <Routes>
           <Route path='/' element={<Home />} />
      </Routes>
      <Requests requests={requests} />
      </>
  );
}

export default App;
