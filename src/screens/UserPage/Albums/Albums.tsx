import React from "react";
import Classes from "./Albums.module.css";
import { CardTitle } from "../Biography/Biography";
import LinkNavigation from "../../../components/Navigate/LinkNavigation/LinkNavigation";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import UserPhotos from "./UserPhotos/UserPhotos";
import Card from "../../../components/UI/Card/Card";
import styled from "styled-components";
import { Colors } from "../../../constants/generalStyles";
import UserAlbums from "./UserAlbums/UserAlbums";
import UserVideos from "./UserVideos/UserVideos";
import { string } from "yup";

export const ButtonIcon = styled.button.attrs(
  ({ height = "100%" }: { height: string | number }) => ({
    height: height,
  })
)`
  color: white;
  font-size: 1rem;
  margin: 0 0.4rem;
  outline: none;
  border: none;
  background-color: #4b4a4a;
  border-radius: 8px;
  cursor: pointer;
  height: ${(props) => props.height};
  width: auto;
  padding: 6px 14px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #635f5f;
  }
`;

export const Navigation = styled.div.attrs(
  ({ maxWidth }: { maxWidth: string }) => ({
    maxWidth: maxWidth,
  })
)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: ${(props) => props.maxWidth};
  height: 45px;
  margin-top: 1.2rem;
`;

export const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #181616;
  padding: 2rem;
`;

export const CardContainer = styled.div.attrs(
  ({ maxWidth }: { maxWidth: string }) => ({
    maxWidth: maxWidth,
  })
)`
  width: ${(props) => props.maxWidth};
  margin: 0 auto;
`;

export const CardHeader = styled.div.attrs(
  ({ columns, height }: { columns: string; height: number }) => ({
    columns: columns,
    height: height,
  })
)`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: 1fr;
  padding: 0.4rem;
  height: ${(props) => props.height}px;
`;

const Albums = () => {
  let { path, url } = useRouteMatch();
  return (
    <UserContainer>
      <CardContainer maxWidth="65%">
        <Card>
          <CardHeader height={50} columns="20% 80%">
            <div className={Classes.SomethingContainer}>
              <CardTitle>Photos</CardTitle>
            </div>
            <div className={Classes.SomethingContainer}>
              <button className={Classes.Options}>
                <i className="fas fa-plus"></i>
                Create Album
              </button>
              <button className={Classes.Options}>Add Photo/Video</button>
              <ButtonIcon>
                <i className="fas fa-ellipsis-h"></i>
              </ButtonIcon>
            </div>
          </CardHeader>
          <Navigation maxWidth="70%">
            <LinkNavigation
              to={`${url}/`}
              label="Fotos en las que apareces"
              size={14}
            />
            <LinkNavigation to={`${url}/all`} label="Tus Fotos" size={14} />
            <LinkNavigation label="Albunes" to={`${url}/albums`} size={14} />
          </Navigation>
          <div className={Classes.BodyContent}>
            <Switch>
              <Route path={`${path}/`} component={UserPhotos} exact />
              <Route path={`${path}/all`} component={UserPhotos} exact />
              <Route path={`${path}/albums`} component={UserAlbums} exact />
            </Switch>
          </div>
        </Card>
      </CardContainer>
      <CardContainer maxWidth="65%">
        <Card>
          <CardHeader height={50} columns="20% 80%">
            <div className={Classes.SomethingContainer}>
              <CardTitle>Videos</CardTitle>
            </div>
            <div className={Classes.SomethingContainer}>
              <ButtonIcon>
                <i className="fas fa-ellipsis-h"></i>
              </ButtonIcon>
            </div>
          </CardHeader>
          <Navigation maxWidth="40%">
            <LinkNavigation
              to={`${url}`}
              label="Your videos"
              size={14}
              exact={false}
            />
          </Navigation>
          <div className={Classes.BodyContent}>
            <UserVideos />
          </div>
        </Card>
      </CardContainer>
    </UserContainer>
  );
};

export default Albums;
