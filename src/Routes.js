import React from "react";
import { Switch } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import AppliedRoute from "./components/AppliedRoute";
import NewPost from "./containers/NewPost";

export default ({ childProps }) =>
<Switch>
  <AppliedRoute path="/" exact component={Home} props={childProps} />
  <AppliedRoute path="/login" exact component={Login} props={childProps} />
  <AppliedRoute path="/signup" exact component={Signup} props={childProps} />
  <AppliedRoute path="/posts/new" exact component={NewPost} props={childProps} />
</Switch>;