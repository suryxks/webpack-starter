import React from 'react';
import ReactDOM from 'react-dom'
import { App } from './App.jsx';

const rootNode = document.getElementById('root');
const root = ReactDOM.createRoot(rootNode);
root.render( <React.StrictMode>
  <App/>
</React.StrictMode>);