import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Auth, User, Front } from "ui";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/user" component={User} />
          <Route path="/" component={Front} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
