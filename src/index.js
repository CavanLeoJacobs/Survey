import React from 'react';
import App from './App.js';

import ReactDOM from 'react-dom/client';
import './webapplication/css/index.css';
import './webapplication/css/Style.css';
import './webapplication/css/DataBaseStyle.css';
import './webapplication/css/HomeStyle.css';
import './webapplication/css/ViewProfileStyle.css';
import './webapplication/css/RegisteringStyle.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <React.StrictMode>
<App/>
  </React.StrictMode>
</>
);

