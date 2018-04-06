import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducers from './reducers'
const store = createStore(reducers)

// import { Provider } from 'react-redux';
// import configureStore from "store";
// import { loadState } from "localState";

//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render((
  <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('root'))
registerServiceWorker();


// ReactDOM.render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ), document.getElementById('root'))
// registerServiceWorker();



// let store = configureStore({ auth: loadState() });

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root'),
// );
