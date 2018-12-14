import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import AppliedRoute from "./components/AppliedRoute";

// export default () =>
//   <Switch>
//     <Route path="/" exact component={Home} />
//     <Route path="/login" exact component={Login} />
//   </Switch>;

export default ({ childProps }) =>
<Switch>
  <AppliedRoute path="/" exact component={Home} props={childProps} />
  <AppliedRoute path="/login" exact component={Login} props={childProps} />
</Switch>;