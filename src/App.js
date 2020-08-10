import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/navigation/NavBar';
import Footer from './components/Footer';
import { GlobalStyles } from './theme/GlobalStyles';
import theme from './theme/Theme';

// import setAuthToken from "./utils/setAuthToken";
import store from './../src/store';
import jwt_decode from "jwt-decode";
import { setCurrentUser, logOutUser, setAuthToken } from './store/domains/auth';

// Check for token to keep admin logged in
if(localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(`Bearer ${token}`);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set admin and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logOutUser());
    // Redirect to login
    window.location.href = "/";
  }
}

const App = () => {
  const currentUserToken = localStorage.getItem("jwtToken");
  console.log(6666, currentUserToken);
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Suspense fallback={<div>Loading... </div>}>
            <NavBar />
            <Switch>
              <Route exact path='/' component={lazy(() => import('./containers/home/Home'))} />
              <Route exact path='/lizena' component={lazy(() => import('./containers/home/Home'))} />
              <Route exact path='/for-sale' component={lazy(() => import('./containers/for-sale'))} />
              <Route exact path='/for-sale/object/:id' component={lazy(() => import('./containers/object'))} />
              <Route exact path='/projects' component={lazy(() => import('./containers/projects'))} />
              <Route exact path='/projects/project/:id' component={lazy(() => import('./containers/project'))} />
              <Route exact path='/services' component={lazy(() => import('./containers/services/Services'))} />
              <Route exact path='/contacts' component={lazy(() => import('./containers/contacts'))} />
              <Route exact path='/admin' 
                component={currentUserToken ? lazy(() => import('./containers/adminLogOut')) : lazy(() => import('./containers/adminLogIn'))}
              />
            </Switch>
            <Footer/>
          </Suspense>
        {/* <LoadingSpinner /> */}
        </Router>
    </ThemeProvider>
  );
}

export default App;
