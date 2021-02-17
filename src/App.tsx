import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import SignUp from "./screens/auth/SingUp";

import Home from "./screens/Home/Home";
import UserPage from "./screens/UserPage/UserPage";
import Navigation from "./layout/Navigation/Navigation";
import { RootState } from "./redux/root-reducer";
import { logOut, meRequest, startApp } from "./redux/user/user.actions";

function App({ user }: any) {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    const time = localStorage.getItem("tokenExpiration");
    if (token && time) {
      const expirationTime = new Date(time);

      console.log("expiration time", expirationTime);

      if (new Date() <= expirationTime) {
        dispatch(meRequest(token));
      } else {
        dispatch(logOut());
      }
    } else {
      dispatch(startApp());
    }
  }, [dispatch]);

  if (state.initialLoading) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "royalblue",
          color: "whitesmoke",
          fontSize: "2rem",
        }}
      >
        <h1>The app is loading</h1>
      </div>
    );
  } else if (!user.currentUser) {
    return (
      <Switch>
        <Route path="/login" exact component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact render={() => <h1>Hello world!!</h1>} />
        <Route path="/user/:id" component={UserPage} />
        <Redirect to="/" />
      </Switch>
    </>
  );
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

// const mapDispatchToProps = (dispatch) => ({
//   checkUserSession: () => dispatch(checkUserSession()),
// });

export default connect(mapStateToProps)(App);
