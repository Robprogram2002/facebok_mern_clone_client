import React from "react";
import styled from "styled-components";
import Login1 from "../../../../assets/login.jpg";
import Login2 from "../../../../assets/login2.jpg";
import Photo1 from "../../../../assets/publicity1.jpg";
import Photo2 from "../../../../assets/publicity2.jpg";
import Photo3 from "../../../../assets/publicity3.jpg";

export const GridContainer = styled.div.attrs(
  ({ columns = 5, rowHeight }: { columns?: number; rowHeight?: number }) => ({
    columns: columns,
    rowHeight: rowHeight,
  })
)`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-auto-rows: ${(props) => props.rowHeight}px;
  margin: 0;
  gap: 0.8rem;
  padding: 0;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img.attrs(
  ({ scale = 1.085 }: { scale: number }) => ({
    scale: scale,
  })
)`
  max-width: 100%;
  max-height: 100%;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  transition: 0.2s all ease-in;
  cursor: pointer;

  &:hover {
    transform: scale(${(props) => props.scale});
  }
`;

export const ImageGridContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  opacity: 0.85;
  transition: 0.2s all ease-in;
  position: relative;

  &:hover {
    opacity: 1;
  }
`;

export const EditIcon = styled.div`
  position: absolute;
  top: 8%;
  right: 8%;
  background-color: rgba(10, 10, 10, 0.5);
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.5px solid #857e7e;
  color: #ffffff;
  transition: 0.2s all ease-in;

  &:hover {
    background-color: rgba(10, 10, 10, 0.8);
  }
`;

const UserPhotos = () => {
  return (
    <GridContainer rowHeight={165}>
      <ImageGridContainer>
        <Image src={Login1} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Login2} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo1} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo2} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo3} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Login1} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Login2} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo1} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo2} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo3} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Login1} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Login2} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo1} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo2} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
      <ImageGridContainer>
        <Image src={Photo3} alt="" />
        <EditIcon>
          <i className="fas fa-edit"></i>
        </EditIcon>
      </ImageGridContainer>
    </GridContainer>
  );
};

export default UserPhotos;
