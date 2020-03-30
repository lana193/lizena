import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navigation/NavBar';

const App = () => {
  return (
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
  );
}

export default App;
