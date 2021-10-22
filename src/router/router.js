import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import PersonalDashboard from "../pages/dashboard";
import LandingPage from "../pages/landingPage";
import NavBar from "../components/menu";
import { ImageDetail } from "../pages/image_detail";
import ExploreContainerImages from "../pages/explore";
import jwt_decode from 'jwt-decode';
import { Redirect } from "react-router";

export const ParachuteUIRouter = () => {
	return (
		<Router>
			<Switch>
				<Route path="/repositories">
					<AuthRoute>
						<PersonalDashboard />
					</AuthRoute>
				</Route>
				<Route path={"/details/:username/:imagename"}>
					<Wrapper>
						<ImageDetail />
					</Wrapper>
				</Route>
				<Route path="/explore">
					<Wrapper>
						<ExploreContainerImages />
					</Wrapper>
				</Route>
				<Route path="/login" component={LandingPage} />
				<Route path="/profile" />
				<Route path="/" component={LandingPage} />
			</Switch>
		</Router>
	);
}

const Wrapper = ({ children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				<React.Fragment>
					<NavBar />
					{children}
				</React.Fragment>
			}
		/>
	);
}

export const IsTokenValid = () => {
	const token = localStorage.getItem('token')
	if (!token) {
		return false
	}
	const decoded = jwt_decode(token)

	if (decoded.exp * 1000 > new Date().getTime()) {
		return true
	}

	return false
}

const AuthRoute = ({ children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={({ location }) =>
				IsTokenValid() ?
					<React.Fragment>
						<NavBar />
						{children}
					</React.Fragment>
					: <Redirect
						to={{
							pathname: "/",
							state: { from: location }
						}}
					/>
			}
		/>
	);
}
