import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Trunk from './trunk';



ReactDOM.render(
  <Trunk 
  barkColor="#784421" 
  translateX="0" 
  translateY="0"
  rotateDegree="0"
  rotateFromX="90"
  rotateFromY="257" />,
  document.getElementById('root')
);