import React, { Component } from "react";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import reducers from "./reducers";
import ReduxThunk from "redux-thunk";
import { MuiThemeProvider, createMuiTheme } from "material-ui/styles";

import DashBoard from "./components/DashBoard";
import LoginForm from "./components/auth/LoginForm";
import SignupForm from "./components/auth/SignupForm";

import Chatbot from "./components/chatbot/chatbot";

import Redirect from "./common/redirect";
import require_auth from "./components/HOC/require_auth";

import Home from "./components/home";

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <BrowserRouter>
            <div className="container">
              <Switch>
                <Route exact path="/DashBoard" component={DashBoard} />
                <Route exact path="/SignupForm" component={SignupForm} />
                <Route exact path="/" component={Home} />
                <Route exact path="/redirect" component={Redirect} />
              </Switch>
            </div>
          </BrowserRouter>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;
