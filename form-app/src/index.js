import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router , Routes ,Route ,Link} from "react-router-dom";
import Contact from './components/Contact';

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

export const Routing=()=>(
  <>
  
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact"></Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" Component={App}/>
          <Route path="/contact" Component={Contact}/>
        </Routes>
      </div>
  </>
  </>
)


ReactDOM.render(
  <Router>
      <Routing />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();

