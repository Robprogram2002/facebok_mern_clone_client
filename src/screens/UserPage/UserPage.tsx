import React, { useContext, useEffect, useState } from "react";
import {
  useHistory,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";
import portada from "../../assets/publicity3.jpg";
import perfilPhoto from "../../assets/publicity2.jpg";
import Classes from "./UserPage.module.css";

import UserPanel from "./UserPanel/UserPanel";
import Biography from "./Biography/Biography";
import Albums from "./Albums/Albums";
import Friends from "./Friends/Friends";
import { authContext } from "../../store/context";

export interface IUserInfo {
  userName: string;
  email: string;
  profile: {
    imageProfile: string;
    portada: string;
    information?: {
      general?: any;
      education?: any;
      places?: any;
      basicInfo?: any;
      lifeEvents?: any;
    };
  };
  posts: any[];
  follows: any[];
  followers: any[];
  albums: any[];
}

const UserPage = () => {
  const [userInfo, setUserInfo] = useState<IUserInfo>();
  let { path, url } = useRouteMatch();
  const userId = url.split("/")[2];
  const authState = useContext(authContext);

  console.log(userInfo);

  useEffect(() => {
    fetch(`http://localhost:8080/profile/get-info/${userId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Barear ${authState.userToken}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserInfo(data.userinfo);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  if (!userInfo) {
    return <h1>The app is loading</h1>;
  }

  return (
    <>
      <UserPanel
        portada={userInfo.profile.portada}
        perfilPhoto={userInfo.profile.imageProfile}
        userName={userInfo.userName}
      />
      <div className={Classes.BodyContent}>
        <Switch>
          <Route
            path={`${path}/biography`}
            render={() => <Biography userData={userInfo} />}
          />
          <Route path={`${path}/information`} component={Biography} />
          <Route path={`${path}/photos`} component={Albums} />
          <Route path={`${path}/friends`} component={Friends} />

          {/* <Route path={`${path}/biography`} component={Biography} />
        <Route path={`${path}/biography`} component={Biography} />
        <Route path={`${path}/biography`} component={Biography} />
        <Route path={`${path}/biography`} component={Biography} /> */}
        </Switch>
      </div>
    </>
  );
};

export default UserPage;
