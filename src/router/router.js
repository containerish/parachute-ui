import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import PersonalDashboard from "../pages/dashboard";
import LandingPage from "../pages/landing_page";
import NavBar from "../components/menu";
import {ImageDetail} from "../pages/image_detail";
import ExploreContainerImages from "../pages/explore";

export const ParachuteUIRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path="/repositories">
                    <Wrapper>
                        <PersonalDashboard />
                    </Wrapper>
                </Route>
                <Route path={"/details/:username/:imagename"}>
                    <Wrapper>
                        <ImageDetail/>
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

const Wrapper = ({ children, ...rest }) =>{
    return (
        <Route
            {...rest}
            render={({ location }) =>
                <React.Fragment>
                    <NavBar/>
                    {children}
                </React.Fragment>
            }
        />
    );
}
