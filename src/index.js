import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'



ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
