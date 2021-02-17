import classes from "*.module.css";
import React, { useState, useCallback, useContext, useEffect } from "react";
import HomeLeft from "../../layout/HomeLeft/HomeLeft";
import HomeRight from "../../layout/HomeRight/HomeRight";
import Stories from "../../components/UI/Stories/Stories";
import Classes from "./Home.module.css";
import PostForm from "../../components/MainFeed/PostForm/PostForm";
import CompletePostForm from "../../components/MainFeed/CompletePostForm/CompletePostForm";
import Post from "../../components/MainFeed/Post/Post";

import image from "../../assets/publicity2.jpg";
import { authContext } from "../../store/context";

const Home = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [postsList, setPostsList] = useState<any[]>([]);

  const authState = useContext(authContext);

  useEffect(() => {
    fetch("http://localhost:8080/posts/all", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Barear ${authState.userToken}`,
      },
    })
      .then((response) => response.json())
      .then((responseData) => {
        setPostsList(responseData.posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [authState]);

  const updatedToggle = useCallback(() => {
    setIsToggle((prevState) => {
      return !prevState;
    });
  }, []);

  return (
    <>
      <div
        className={
          isToggle ? Classes.HomeContainerSticky : Classes.HomeContainer
        }
      >
        <div className={Classes.Left}>
          <HomeLeft />
        </div>
        <div className={Classes.PublicityContainer}>
          <HomeRight />
        </div>
        <div className={Classes.Main}>
          <div className={Classes.Stories}>
            <Stories />
          </div>
          <div className={Classes.PostFormContainer}>
            <PostForm
              Placeholder="Que estas pensando, Roberto ?"
              ToggleFunction={updatedToggle}
              perfilImage={authState.user.perfil}
            />
            {isToggle && (
              <CompletePostForm
                UserName="Robert Martz Rivera"
                placeholder="Que estas pensando, Robert?"
                toggleFunction={updatedToggle}
              />
            )}
          </div>
          <div className={Classes.PostList}>
            {postsList &&
              postsList.map((post) => (
                <Post
                  image={post.contentImage}
                  ContentText={post.contentText}
                  reactionNumber={post.reactions.length}
                  commentsNumber={post.comments.length}
                  key={post._id}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
