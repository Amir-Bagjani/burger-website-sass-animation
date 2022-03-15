import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/index.scss"

AOS.init({
  duration: 800,
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


