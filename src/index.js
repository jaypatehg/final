  import React from "react";
  import ReactDOM from "react-dom";
  import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

  import AuthLayout from "layouts/Auth.js";
  import AdminLayout from "layouts/Admin.js";
  import RTLLayout from "layouts/RTL.js";
  import SignUp from './views/Pages/SignIn';

  ReactDOM.render(
    <HashRouter>
      <Switch>
        <Route path={`/auth`} component={AuthLayout} />
        <Route path={`/admin`} component={AdminLayout} />
        <Route path={`/rtl`} component={RTLLayout} />
        <Route exact path="/" render={() => <Redirect to="/auth/SignIn" />} />
        <Route path="/Dashboard" render={() => <Redirect to="/admin/Dashboard" />} />
      </Switch>
    </HashRouter>,
    document.getElementById("root")
  );