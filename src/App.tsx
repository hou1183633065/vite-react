import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Entrance from '/@/pages/Entrance';
import Login from '/@/pages/Login';
export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/" component={Entrance}></Route>
      </Switch>
    </BrowserRouter>
  )
}
