import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import BubblesPage from './BubblePage'


const PrivateRoute = () => {
  return (
    <Route {...rest} render={props =>
    isAuthenticated ?
    (<BubblesPage {...props} />

    ):(
      <Redirect to='/login'/>

    )
  } />
   );
}

export default PrivateRoute;








//Task List:
//1. Build a PrivateRoute component that redirects if user is not logged in