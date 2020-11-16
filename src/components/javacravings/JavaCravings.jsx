import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomepageComponent from "../home/HomepageComponent";
import HeaderComponent from "./Header";
import FooterComponent from "./Footer";
import InterviewQuestions from "../interviewquestions/InterviewQuestions";
import InterviewQuestionsViewComponent from "../interviewquestions/InterviewQuestionsViewComponent";
import ArticlesComponent from "../articles/ArticlesComponent";
import ArticleViewComponent from "../articles/ArticleViewComponent";
import JavaComponent from "../java/JavaComponent";
import JavaTutorialView from "../java/JavaTutorialView";
import ErrorComponent from "./ErrorComponent";
import LoginComponent from "../login/Login";
import LogoutComponent from "../login/Logout";
import AuthenticateRoute from "./AuthenticatedRoute";

class JavaCravings extends Component {
  render() {
    return (
      <div className="todo">
        <Router basename="/javacravings">
          <>
            <HeaderComponent />
            <Switch>
              <Route path="/" exact component={LoginComponent}></Route>
              <Route path="/login" component={LoginComponent}></Route>
              <AuthenticateRoute
                path="/home"
                exact
                component={HomepageComponent}
              />
              <AuthenticateRoute
                path="/home/:name"
                component={HomepageComponent}
              />
              <AuthenticateRoute
                path="/javaTutorial"
                component={JavaComponent}
              />
              <AuthenticateRoute
                path="/java/:name"
                component={JavaTutorialView}
              />
              <AuthenticateRoute
                path="/interviews"
                component={InterviewQuestions}
              />
              <AuthenticateRoute
                path="/interview/:name"
                component={InterviewQuestionsViewComponent}
              />
              <AuthenticateRoute
                path="/article/:name"
                component={ArticleViewComponent}
              />
              <AuthenticateRoute
                path="/articles"
                component={ArticlesComponent}
              />
              <AuthenticateRoute
                path="/article/:name"
                component={ArticleViewComponent}
              />
              <AuthenticateRoute path="/logout" component={LogoutComponent} />
              <Route component={ErrorComponent}></Route>
            </Switch>
            <FooterComponent />
          </>
        </Router>
      </div>
    );
  }
}

export default JavaCravings;
