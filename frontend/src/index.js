import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.css';
 import "./reg_osn.css"
 import "./reg_osn.css"
import { BrowserRouter } from "react-router-dom";
import './reg.css'
import './new_pasword.css'
import './client_o_sebe.css'
import './reg_osn_new.css'
import "./set.css"
import "./search_res.css"
import "./tick.css"
import "./potverzhdenie.css"
import "./vashiPoizdki.css"
import "./404.css"
import "./about_us.css"

import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
  </BrowserRouter>
);
