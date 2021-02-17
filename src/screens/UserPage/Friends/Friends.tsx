import React from "react";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import {
  UserContainer,
  Navigation,
  CardContainer,
  CardHeader,
} from "../Albums/Albums";
import Card from "../../../components/UI/Card/Card";
import { CardTitle } from "../Biography/Biography";
import Search from "../../../components/Navigate/Search/Search";
import LinkNavigation from "../../../components/Navigate/LinkNavigation/LinkNavigation";
import Followers from "./Followers/Followers";

const Friends = () => {
  let { path, url } = useRouteMatch();
  return (
    <UserContainer>
      <CardContainer maxWidth="65%">
        <Card>
          <CardHeader columns="65% 35%" height={50}>
            <CardTitle>Friends</CardTitle>
            <Search
              placeholder="Search Friends"
              IconName="fas fa-search"
              onClick={() => {}}
            />
          </CardHeader>
          <Navigation maxWidth="60%">
            <LinkNavigation to={`${url}`} label="Followers" size={16} exact />
            <LinkNavigation
              to={`${url}/follows`}
              label="Follows"
              size={16}
              exact
            />
          </Navigation>
          <div style={{ marginTop: 20 }}>
            <Switch>
              <Route path={`${path}`} component={Followers} exact={true} />
              <Route
                path={`${path}/follows`}
                component={Followers}
                exact={true}
              />
            </Switch>
          </div>
        </Card>
      </CardContainer>
    </UserContainer>
  );
};

export default Friends;
