import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/navigation/NavBar';
import Home from './containers/home/Home';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading... </div>}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={lazy(() => import('./containers/home/Home'))} />
          <Route exact path="/projects" component={lazy(() => import('./containers/projects/Projects'))} />
          <Route path="/projects/project" component={lazy(() => import('./containers/projects/Project'))} />
        </Switch>
      </Suspense>
      {/* <LoadingSpinner /> */}
    </Router>
  );
}

export default App;
