import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { FirebaseContext } from './store/Context';
import Context from './store/Context';
import firebase from './firebase/Config';

ReactDOM.render(
  <FirebaseContext.Provider value={{firebase}} >
    <Context>
    <App />
    </Context>
    </FirebaseContext.Provider>,
  document.getElementById('root')
);
