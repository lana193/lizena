import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import NavBar from './components/navigation/NavBar';
import { GlobalStyles } from './theme/GlobalStyles';
import theme from './theme/Theme';

const App = () => {
  return (
    
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Suspense fallback={<div>Loading... </div>}>
            <NavBar />
            <Switch>
              <Route exact path="/" component={lazy(() => import('./containers/home/Home'))} />
              <Route exact path="/lizena" component={lazy(() => import('./containers/home/Home'))} />
              <Route exact path="/projects" component={lazy(() => import('./containers/projects/Projects'))} />
              <Route path="/projects/project" component={lazy(() => import('./containers/projects/Project'))} />
              <Route exact path="/services" component={lazy(() => import('./containers/services/Services'))} />
            </Switch>
          </Suspense>
        {/* <LoadingSpinner /> */}
        </Router>
    </ThemeProvider>
  );
}

export default App;
