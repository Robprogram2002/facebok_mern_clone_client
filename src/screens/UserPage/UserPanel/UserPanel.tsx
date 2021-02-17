import React from "react";
import Classes from "./UserPanel.module.css";
import LinkNavigation from "../../../components/Navigate/LinkNavigation/LinkNavigation";
import { useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { fontFamalies } from "../../../constants/generalStyles";

const Name = styled.h2`
  font-family: ${fontFamalies.cursive};
  color: #fff;
  font-size: 2.6rem;
  letter-spacing: 1px;
`;

interface IProps {
  portada: string;
  perfilPhoto: string;
  userName: string;
}

const UserPanel = (props: IProps) => {
  let { path, url } = useRouteMatch();
  return (
    <div className={Classes.UserPanel}>
      <div className={Classes.PortadaContainer}>
        <img src={props.portada} alt="" className={Classes.Portada} />
        <div className={Classes.PerfilContainer}>
          <img src={props.perfilPhoto} alt="" className={Classes.Perfil} />
        </div>
        <div className={Classes.EditPortada}>
          <i className="fas fa-camera"></i>
          <span>Edit Portada Photo</span>
        </div>
        <div className={Classes.EditPerfil}>
          <i className="fas fa-camera"></i>
        </div>
        <div className={Classes.NameContainer}>
          <Name>{props.userName} </Name>
        </div>
      </div>
      <nav className={Classes.Navigation}>
        <LinkNavigation
          to={`${url}/biography`}
          label="Biograpy"
          exact={false}
        />
        <LinkNavigation
          to={`${url}/information`}
          label="Information"
          exact={false}
        />
        <LinkNavigation to={`${url}/photos`} label="Photos" exact={false} />
        <LinkNavigation to={`${url}/friends`} label="Friends" exact={false} />
        <LinkNavigation to={`${url}/more`} label="See More" exact={false} />
      </nav>
    </div>
  );
};

export default UserPanel;
