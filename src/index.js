import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './animations.css'
import Routes from './Routes'
<<<<<<< HEAD
import Login from './Telas/Painel/RoutesPainel'


ReactDOM.render(<Login/>, document.getElementById('root'));
=======


ReactDOM.render(<Routes/>, document.getElementById('root'));
>>>>>>> e5b65403309b0075a0fa798a0f03a473c1c9f946
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
