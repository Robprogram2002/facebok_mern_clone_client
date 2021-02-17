import React, { useCallback, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import MessageOutlinedIcon from "@material-ui/icons/MessageOutlined";
import NotificationsActiveOutlinedIcon from "@material-ui/icons/NotificationsActiveOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Classes from "./LeftBar.module.css";
import { Avatar, Switch } from "@material-ui/core";
import { RootState } from "../../../redux/root-reducer";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/user/user.actions";

// interface IProps {
//   username: string;
//   perfilImage: string;
//   userId: string;
// }

const LeftBart = () => {
  const [isSetting, setIsSetting] = useState(false);
  const {
    currentUser: { profile, userName, _id },
    loading,
  } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const { path } = useRouteMatch();

  const userPageRedirect = useCallback(() => {
    setIsSetting(false);
    history.push(`/user/${_id}/biography`);
  }, [history, _id]);

  return (
    <>
      <div className={Classes.Container}>
        <div className={Classes.AvatarContainer} onClick={userPageRedirect}>
          <div>
            <Avatar
              src={profile.imageProfile}
              className={Classes.Icon}
              alt="the user perfil image"
            />
          </div>
          <span
            className={
              path === "/user/:id/biography"
                ? Classes.SpanNameActive
                : Classes.SpanName
            }
          >
            {userName.split(" ")[0]}
          </span>
        </div>
        <button className={Classes.ButtonIcon}>
          <AddCircleOutlineOutlinedIcon className={Classes.Icon} />
        </button>
        <button className={Classes.ButtonIcon}>
          <MessageOutlinedIcon className={Classes.Icon} />
        </button>
        <button className={Classes.ButtonIcon}>
          <NotificationsActiveOutlinedIcon className={Classes.Icon} />
        </button>
        <button
          className={Classes.ButtonIcon}
          onClick={() => setIsSetting((prevState) => !prevState)}
        >
          <MoreVertOutlinedIcon className={Classes.Icon} />
        </button>
      </div>
      {isSetting && (
        <div className={Classes.ToggleContainer}>
          <div className={Classes.UserData} onClick={userPageRedirect}>
            <div className={Classes.Avatar}>
              <Avatar
                src={profile.imageProfile}
                className={Classes.Icon}
                alt="the user perfil image"
              />
            </div>
            <div className={Classes.Data}>
              <p> {userName} </p>
              <span>Ver Perfil</span>
            </div>
          </div>
          <hr />
          <div className={Classes.SettingsContainer}>
            <div className={Classes.Setting}>
              <div className={Classes.ButtonIcon}>
                <SettingsIcon fontSize="default" className={Classes.Icon} />
              </div>
              <div>
                <span className={Classes.SettingText}>
                  Settings and Private
                </span>
              </div>
              <div>
                <ArrowForwardIosIcon
                  fontSize="default"
                  className={Classes.Icon}
                />
              </div>
            </div>
            <div className={Classes.Setting}>
              <div className={Classes.ButtonIcon}>
                <SettingsIcon fontSize="default" className={Classes.Icon} />
              </div>
              <div>
                <span className={Classes.SettingText}>Help and Asistent</span>
              </div>
              <div>
                <ArrowForwardIosIcon
                  fontSize="default"
                  className={Classes.Icon}
                />
              </div>
            </div>
            <div className={Classes.Setting}>
              <div className={Classes.ButtonIcon}>
                <SettingsIcon fontSize="default" className={Classes.Icon} />
              </div>
              <div>
                <span className={Classes.SettingText}>Dark Mode</span>
              </div>
              <div>
                <Switch color="primary" />
              </div>
            </div>
            <div className={Classes.Setting} onClick={() => dispatch(logOut())}>
              <div className={Classes.ButtonIcon}>
                <ExitToAppIcon fontSize="default" className={Classes.Icon} />
              </div>
              <div>
                <span className={Classes.SettingText}>
                  {loading ? "Loading ..." : "Salir"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LeftBart;
