import React from "react";
import {
  GridContainer,
  ImageGridContainer,
  EditIcon,
  Image,
} from "../../Albums/UserPhotos/UserPhotos";
import Photo1 from "../../../../assets/publicity1.jpg";
import Photo2 from "../../../../assets/publicity2.jpg";
import Photo3 from "../../../../assets/publicity3.jpg";

const UserVideos = () => {
  return (
    <GridContainer rowHeight={148}>
      <ImageGridContainer>
        <Image src={Photo1} />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo1} />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo1} />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
    </GridContainer>
  );
};

export default UserVideos;
