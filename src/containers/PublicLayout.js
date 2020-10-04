import React from "react";
import { Container } from "react-bootstrap";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "./HomePage";
import PublicNavbar from "./PublicNavbar";
import RegisterPage from "./RegisterPage";
import { Switch, Route } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
          <Route exact path="/register" component={RegisterPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
