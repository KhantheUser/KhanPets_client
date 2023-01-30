import React from 'react';
import ReactDOM from 'react-dom';
import "video-react/dist/video-react.css"; 
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'antd/dist/reset.css';
// import 'antd/dist/antd'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import { store ,persistor} from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
ReactDOM.render(
  
<Provider store={store}>
 
  {/* <React.StrictMode> */}
  <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate> 
  {/* </React.StrictMode> */}
  </Provider>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
