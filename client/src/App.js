import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar.tsx";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login.tsx";
import Register from "./pages/register/Register";
import { Counter } from "./features/counter/Counter.tsx";
import DashBoard from "pages/admin/DashBoard";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAppSelector, useAppDispatch } from "app/hooks";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { useContext, useEffect } from "react";
import { Context } from "./context/Context";
import routes from "router/routes";
import defaultRoutes from "router/defaultRoutes";
import { getUser } from "store/user/userSlice";
import "./scss/style.scss";

function App() {
  // const { user } = useContext(Context);
  const user = useAppSelector(getUser);
  useEffect(() => {}, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TopBar /> <Home />
        </Route>
        <Route path="/register">
          {" "}
          <TopBar />
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {" "}
          <TopBar />
          {user ? <Home /> : <Login />}
        </Route>
        <Route path="/counter">
          <Counter></Counter>
        </Route>
        {/* <Route path="/write">{user ? <Write /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId">
          <Single />
        </Route> */}
        <Route path="/post/:postId">
          <TopBar />
          <Single />
        </Route>
        <Route path="/dashboard">
          <DashBoard />
        </Route>
        {user ? (
          routes.map((route, idx) => {
            return (
              route.component && (
                <>
                  <TopBar />
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => <route.component {...props} />}
                  />
                </>
              )
            );
          })
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
    </Router>
  );
}

export default App;
