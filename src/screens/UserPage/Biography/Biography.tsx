import React, { useState, useCallback } from "react";
import Classes from "./Biography.module.css";
import Card from "../../../components/UI/Card/Card";
import styled from "styled-components";
import { fontFamalies } from "../../../constants/generalStyles";
import imageGrid from "../../../assets/publicity1.jpg";
import PostForm from "../../../components/MainFeed/PostForm/PostForm";
import Post from "../../../components/MainFeed/Post/Post";
import { IUserInfo } from "../UserPage";
import CompletePostForm from "../../../components/MainFeed/CompletePostForm/CompletePostForm";

export const CardTitle = styled.h2`
  color: #fff;
  font-family: ${fontFamalies.optional};
  font-size: 1.4rem;
  width: 100%;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SpanLink = styled.a`
  color: royalblue;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const DetailsButton = styled.button`
  width: 100%;
  display: block;
  background-color: #363232e8;
  padding: 8px 14px;
  border-radius: 10px;
  border: none;
  outline: none;
  margin-top: 0.8rem;
  color: #ffffff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.2s all ease;

  &:hover {
    background-color: #423b3b;
  }
`;

export const SpanMessege = styled.span`
  color: #929292;
  font-family: ${fontFamalies.regular};
  font-size: 1rem;
  letter-spacing: 0.8px;
  font-weight: 300;
`;

const Name = styled.span`
  color: #ffff;
  font-family: ${fontFamalies.regular};
  font-size: 0.8rem;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

interface IProps {
  userData: IUserInfo;
}

const Biography = ({ userData }: IProps) => {
  const [isToggle, setIsToggle] = useState(false);

  const updatedToggle = useCallback(() => {
    setIsToggle((prevState) => {
      return !prevState;
    });
  }, []);
  return (
    <div className={Classes.Container}>
      <div></div>
      <div className={Classes.Main}>
        <div className={Classes.Left}>
          <div className={Classes.DetallesContainer}>
            <Card>
              <CardTitle>Details</CardTitle>
              <div className={Classes.Detail}>
                <i className="fas fa-briefcase"></i>
                <span>
                  Trabaja en <br />
                  <i>
                    {" "}
                    {userData.profile.information?.education
                      ? userData.profile.information?.education.job
                      : "not job specified"}
                  </i>
                </span>
              </div>
              <div className={Classes.Detail}>
                <i className="fas fa-home"></i>
                <span>
                  Vive en <br />
                  <i>
                    {" "}
                    {userData.profile.information?.places.livingPlace
                      ? userData.profile.information?.places.livingPlace
                      : "not living place specified"}{" "}
                  </i>
                </span>
              </div>
              <div className={Classes.Detail}>
                <i className="fas fa-map-marker-alt"></i>
                <span>
                  De <br />
                  <i>
                    {" "}
                    {userData.profile.information?.places.originPlace
                      ? userData.profile.information?.places.originPlace
                      : "not origin place specified"}
                  </i>
                </span>
              </div>
              <DetailsButton>Edit Details</DetailsButton>
              <DetailsButton>Edit Details</DetailsButton>
            </Card>
          </div>
          <div className={Classes.PhotoGridContainer}>
            <Card>
              <CardTitle>Photos</CardTitle>
              <div className={Classes.CardToggle}>
                <SpanLink>See more</SpanLink>
              </div>
              <div className={Classes.GridPhotos}>
                <div>
                  <img src={imageGrid} alt="" className={Classes.ImageGrid} />
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.ImageGrid} />
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.ImageGrid} />
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.ImageGrid} />
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.ImageGrid} />
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.ImageGrid} />
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.ImageGrid} />
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.ImageGrid} />
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.ImageGrid} />
                </div>
              </div>
            </Card>
          </div>
          <div className={Classes.PhotoGridContainerLarge}>
            <Card>
              <CardTitle>Friends</CardTitle>
              <SpanMessege> 333 friends </SpanMessege>
              <div className={Classes.CardToggle}>
                <SpanLink>See all</SpanLink>
              </div>
              <div className={Classes.GridPhotos}>
                <div>
                  <img src={imageGrid} alt="" className={Classes.FriendGrid} />
                  <Name>Robert Martz Rivera</Name>
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.FriendGrid} />
                  <Name>Robert Martz Rivera</Name>
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.FriendGrid} />
                  <Name>Robert Martz Rivera</Name>
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.FriendGrid} />
                  <Name>Robert Martz Rivera</Name>
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.FriendGrid} />
                  <Name>Robert Martz Rivera</Name>
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.FriendGrid} />
                  <Name>Robert Martz Rivera</Name>
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.FriendGrid} />
                  <Name>Robert Martz Rivera</Name>
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.FriendGrid} />
                  <Name>Robert Martz Rivera</Name>
                </div>
                <div>
                  <img src={imageGrid} alt="" className={Classes.FriendGrid} />
                  <Name>Robert Martz Rivera</Name>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div className={Classes.Right}>
          <div className={Classes.PostForm}>
            <PostForm
              ToggleFunction={updatedToggle}
              Placeholder="What are in your mind, Robert"
              perfilImage={userData.profile.imageProfile}
            />
          </div>
          {isToggle && (
            <CompletePostForm
              UserName={userData.userName}
              placeholder={`what is in your mind, ${
                userData.userName.split(" ")[0]
              }`}
              toggleFunction={updatedToggle}
            />
          )}
          <div style={{ height: 60 }}>
            <Card>
              <div className={Classes.FilterContainer}>
                <CardTitle style={{ textAlign: "center" }}>
                  Publications
                </CardTitle>
                <div className={Classes.Filter}>
                  <i className="fas fa-sliders-h"></i>
                  Filters
                </div>
              </div>
            </Card>
          </div>
          <div className={Classes.PostListContainer}>
            <div className={Classes.PostList}>
              <Post
                image={imageGrid}
                ContentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio amet consequatur porro minus atque tempore recusandae quasi rerum voluptatem! Soluta in error rerum inventore."
                reactionNumber="22"
                commentsNumber="100"
              />
              <Post
                image={imageGrid}
                ContentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio amet consequatur porro minus atque tempore recusandae quasi rerum voluptatem! Soluta in error rerum inventore."
                reactionNumber="22"
                commentsNumber="100"
              />
              <Post
                image={imageGrid}
                ContentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio amet consequatur porro minus atque tempore recusandae quasi rerum voluptatem! Soluta in error rerum inventore."
                reactionNumber="22"
                commentsNumber="100"
              />

              <Post
                image={imageGrid}
                ContentText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente odio amet consequatur porro minus atque tempore recusandae quasi rerum voluptatem! Soluta in error rerum inventore."
                reactionNumber="22"
                commentsNumber="100"
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Biography;
