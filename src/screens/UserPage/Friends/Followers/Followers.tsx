import React from "react";
import styled from "styled-components";
import {
  GridContainer,
  ImageGridContainer,
  Image,
  EditIcon,
} from "../../Albums/UserPhotos/UserPhotos";
import { Colors } from "../../../../constants/generalStyles";
import { ButtonIcon } from "../../Albums/Albums";
import { AlbumName } from "../../Albums/UserAlbums/UserAlbums";
import { SpanMessege } from "../../Biography/Biography";
import Publicity2 from "../../../../assets/publicity2.jpg";
import Publicity1 from "../../../../assets/publicity1.jpg";
import { useRouteMatch } from "react-router-dom";

const UserCard = styled.div`
  border-radius: 10px;
  width: 100%;
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${Colors.backgroundPost};
  box-shadow: -0.2px 0.2px 1px 1.4px rgba(66, 66, 66, 0.5);
`;

const Followers = () => {
  const { path, url } = useRouteMatch();
  console.log(path);
  console.log(url);
  let myImage = Publicity2;

  if (path === "/user/:id/friends/follows") {
    myImage = Publicity1;
  }

  return (
    <GridContainer rowHeight={120} columns={2}>
      <UserCard>
        <div style={{ height: "78%", width: "24%" }}>
          <Image src={myImage} scale={1.0} />
        </div>
        <div>
          <AlbumName>Roberto Martinez Rivera</AlbumName>
          <SpanMessege>233 amigos en comun</SpanMessege>
        </div>
        <ButtonIcon height="40%">Amigos</ButtonIcon>
      </UserCard>
      <UserCard>
        {" "}
        <div style={{ height: "78%", width: "24%" }}>
          <Image src={myImage} scale={1.0} />
        </div>
        <div>
          <AlbumName>Roberto Martinez Rivera</AlbumName>
          <SpanMessege>233 amigos en comun</SpanMessege>
        </div>
        <ButtonIcon height="40%">Amigos</ButtonIcon>
      </UserCard>
      <UserCard>
        {" "}
        <div style={{ height: "78%", width: "24%" }}>
          <Image src={myImage} scale={1.0} />
        </div>
        <div>
          <AlbumName>Roberto Martinez Rivera</AlbumName>
          <SpanMessege>233 amigos en comun</SpanMessege>
        </div>
        <ButtonIcon height="40%">Amigos</ButtonIcon>
      </UserCard>
      <UserCard>
        {" "}
        <div style={{ height: "78%", width: "24%" }}>
          <Image src={myImage} scale={1.0} />
        </div>
        <div>
          <AlbumName>Roberto Martinez Rivera</AlbumName>
          <SpanMessege>233 amigos en comun</SpanMessege>
        </div>
        <ButtonIcon height="40%">Amigos</ButtonIcon>
      </UserCard>
      <UserCard>
        {" "}
        <div style={{ height: "78%", width: "24%" }}>
          <Image src={myImage} scale={1.0} />
        </div>
        <div>
          <AlbumName>Roberto Martinez Rivera</AlbumName>
          <SpanMessege>233 amigos en comun</SpanMessege>
        </div>
        <ButtonIcon height="40%">Amigos</ButtonIcon>
      </UserCard>
      <UserCard>
        {" "}
        <div style={{ height: "78%", width: "24%" }}>
          <Image src={myImage} scale={1.0} />
        </div>
        <div>
          <AlbumName>Roberto Martinez Rivera</AlbumName>
          <SpanMessege>233 amigos en comun</SpanMessege>
        </div>
        <ButtonIcon height="40%">Amigos</ButtonIcon>
      </UserCard>
      <UserCard>
        {" "}
        <div style={{ height: "78%", width: "24%" }}>
          <Image src={myImage} scale={1.0} />
        </div>
        <div>
          <AlbumName>Roberto Martinez Rivera</AlbumName>
          <SpanMessege>233 amigos en comun</SpanMessege>
        </div>
        <ButtonIcon height="40%">Amigos</ButtonIcon>
      </UserCard>
      <UserCard>
        {" "}
        <div style={{ height: "78%", width: "24%" }}>
          <Image src={myImage} scale={1.0} />
        </div>
        <div>
          <AlbumName>Roberto Martinez Rivera</AlbumName>
          <SpanMessege>233 amigos en comun</SpanMessege>
        </div>
        <ButtonIcon height="40%">Amigos</ButtonIcon>
      </UserCard>
    </GridContainer>
  );
};

export default Followers;
