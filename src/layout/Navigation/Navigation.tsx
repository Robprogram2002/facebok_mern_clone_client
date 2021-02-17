import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import Classes from "./Navigation.module.css";
import Search from "../../components/Navigate/Search/Search";
import CentralBar from "../../components/Navigate/CentralBar/CentralBar";
import LeftBart from "../../components/Navigate/LeftBar/LeftBart";

const Navigation = () => {
  return (
    <div className={Classes.Container}>
      <div className={Classes.Left}>
        <FacebookIcon
          fontSize="large"
          color="primary"
          className={Classes.Logo}
        />
        <Search IconName="fas fa-search" placeholder="Search in MoonLight" />
      </div>
      <div className={Classes.CentralBar}>
        <CentralBar />
      </div>
      <div>
        <LeftBart />
      </div>
    </div>
  );
};

export default Navigation;
