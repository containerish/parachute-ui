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
				<AuthRoute path="/repositories">
					<PersonalDashboard />
				</AuthRoute>
				<AuthRoute path={"/details/:username/:imagename"}>
					<ImageDetail />
				</AuthRoute>
				<AuthRoute path="/explore">
					<ExploreContainerImages />
				</AuthRoute>
				{/*<Route path="/login" component={LandingPage} />*/}
				{/*<Route path="/profile" />*/}
				<Route path="/" component={LandingPage} />
			</Switch>
		</Router>
	);
}

const Wrapper = ({ children, ...rest }) => {
	return (
		<Route
			{...rest}
			render={() =>
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

	return decoded.exp * 1000 > new Date().getTime();
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
