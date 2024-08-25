import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import {Provider} from 'react-redux';
import router from "./router/router";
import {RouterProvider} from "react-router-dom";

//import { hydrate, render } from "react-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);


/*
const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
    hydrate(
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>,
        rootElement)
} else {
    render(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>,
        rootElement
    );
}*/
reportWebVitals();
