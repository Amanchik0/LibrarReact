import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { LIBRARY_ROUTE } from "../utilis/consts";
import { Context } from "..";
import AddNewBook from "../pages/AddNewBook";
const AppRouter = () => {
  const { user } = useContext(Context);
  console.log(user);
  return (
    <Switch>
      {user.isAuth === true &&
        authRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
        <Route path="/add-book" exact component={AddNewBook} />
        

      <Redirect to={LIBRARY_ROUTE} />
    </Switch>
  );
};

export default AppRouter;
