import React from 'react';
import ValidatedLoginForm from './ValidatedLoginForm';
import {Redirect, BrowserRouter, Route, Switch} from 'react-router-dom';
import menu from './menu';
import FundList from './FundList';
import profile from './profile';
import PswReset from './PswReset';

function App() {
  //  // A wrapper for <Route> that redirects to the login screen if you're not yet authenticated.
  //  const PrivateRoute = ({ component: Component, ...rest }) => (
  //   <Route {...rest} render={(prop) => (
  //     props.state.authenticated === true
  //       ? <Component {...prop} />
  //       : <Redirect to='/login' />
  //   )} />
  // );
  return (
    // <div className="App">
    //   <ValidatedLoginForm></ValidatedLoginForm>
    // </div>
    <BrowserRouter>
      <div className="App">
        <switch>
          <Route path='/login' component={ValidatedLoginForm} />
          <Route path='/menu' component={menu} />
          <Route path='/list' component={FundList} />
          <Route path='/profile' component={profile} />
          <Route path='/resetpassword' component={PswReset} />
        </switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
