import React from "react";
import { Container } from "react-bootstrap";
import NotFoundPage from "../components/NotFoundPage";
import HomePage from "./HomePage";
import PublicNavbar from "./PublicNavbar";
import RegisterPage from "./RegisterPage";
import LoginPage from "./LoginPage";
import { Switch, Route } from "react-router-dom";

const PublicLayout = () => {
	return (
		<>
			<PublicNavbar />
			<Container>
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/register" component={RegisterPage} />
					<Route exact path="/login" component={LoginPage} />
					<Route component={NotFoundPage} />
				</Switch>
			</Container>
		</>
	);
};

export default PublicLayout;
