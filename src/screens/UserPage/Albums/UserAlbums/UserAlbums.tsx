import React from "react";
import Photo1 from "../../../../assets/publicity1.jpg";
import Photo2 from "../../../../assets/publicity2.jpg";
import Photo3 from "../../../../assets/publicity3.jpg";
import {
  GridContainer,
  ImageGridContainer,
  Image,
  EditIcon,
} from "../UserPhotos/UserPhotos";
import { SpanMessege } from "../../Biography/Biography";
import styled from "styled-components";

export const AlbumName = styled.p`
  color: #fff;
  font-size: 1rem;
  font-family: "Roboto", sans-serif;
  padding-top: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const UserAlbums = () => {
  return (
    <GridContainer rowHeight={170}>
      <ImageGridContainer>
        <Image src={Photo1} style={{ height: "70%" }} />
        <div>
          <AlbumName>Custom Album</AlbumName>
          <SpanMessege style={{ fontSize: 14 }}>10 elements</SpanMessege>
        </div>
        <EditIcon>
          <i className="fas fa-ellipsis-h"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo2} style={{ height: "70%" }} />
        <div>
          <AlbumName>Custom Album</AlbumName>
          <SpanMessege style={{ fontSize: 14 }}>10 elements</SpanMessege>
        </div>
        <EditIcon>
          <i className="fas fa-ellipsis-h"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo3} style={{ height: "70%" }} />
        <div>
          <AlbumName>Custom Album</AlbumName>
          <SpanMessege style={{ fontSize: 14 }}>10 elements</SpanMessege>
        </div>
        <EditIcon>
          <i className="fas fa-ellipsis-h"></i>
        </EditIcon>
      </ImageGridContainer>
    </GridContainer>
  );
};

export default UserAlbums;
