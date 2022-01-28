import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import 'bootstrap';



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})