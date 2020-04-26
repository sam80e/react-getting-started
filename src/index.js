import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GitHubCardsApp from './GitHubCardsApp';
import CounterApp from './CounterApp';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarMatch from './StarMatch';


ReactDOM.render(
  <React.StrictMode>
    <div className="row justify-content-center">
      <div className="col-sm-4">       
        <h1>Counter App</h1> 
        <CounterApp title="Simple React Counter App"/>
      </div>
      <div className="col-sm-4">
        <h1>Github Cards</h1>
        <GitHubCardsApp title="The Github Cards App"/>
      </div>
      <div className="col-sm-4">
        <h1>Github Cards</h1>
        <StarMatch title="Star Match"/>
      </div>
    </div>
    <App />
    
    
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
