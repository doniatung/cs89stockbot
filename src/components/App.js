/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import Form from './form';
import Results from './results';

import '../style.scss';

// const Nav = (props) => {
//   return (
//     <nav>
//       <ul>
//         <li><NavLink to="/" exact>Home</NavLink></li>
//         <li><NavLink to="/about">About</NavLink></li>
//         <li><NavLink to="/test/id1">test id1</NavLink></li>
//         <li><NavLink to="/test/id2">test id2</NavLink></li>
//       </ul>
//     </nav>
//   );
// };


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const App = (props) => {
  return (
    <div>
      <Form />
    </div>
    // <Router>
    //   <div>
    //     {/* <Nav /> */}
    //     <Switch>
    //       <Route exact path="/" component={Form} />
    //       <Route path="/:stock" component={Results} />
    //       <Route component={FallBack} />
    //     </Switch>
    //   </div>
    // </Router>
  );
};


export default App;
