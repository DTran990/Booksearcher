import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware} from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import bookReducer from './components/store/reducers/bookReducer';

//intializes the store with the applyMiddleware function with thunk. 
//Gives our store more functionality
//Gives us the ability to return a function from the action creators which we can use for fetching information from the api database 
const store = createStore(bookReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

