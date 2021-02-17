import React, { useState, useEffect } from "react";
import { RouteChildrenProps } from "react-router-dom";
import Classes from "./SingUp.module.css";
import Login from "../../assets/login2.jpg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/root-reducer";
import { UserState } from "../../redux/user/user.reducer";
import SignInForm from "../../components/Auth/SignInForm/SignInForm";
import SignUpForm from "../../components/Auth/SignUpForm/SignUpForm";

const SingUp: React.FC<RouteChildrenProps> = ({ history }) => {
  const [isLogin, setIsLogin] = useState(true);
  const state: UserState = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (state.signUpSuccess) {
      setIsLogin(true);
      history.push("/login");
    } else if (state.signInSuccess) {
      history.push("/");
    }
  }, [state.signInSuccess, state.signUpSuccess, history]);

  return (
    <div className={Classes.Container}>
      <div className={Classes.FormContainer}>
        {state.signUpError && (
          <p className={Classes.SignUpError}> {state.signUpError} </p>
        )}
        {state.signUpSuccess && (
          <p className={Classes.SignUpSuccess}> {state.signUpSuccess} </p>
        )}

        {state.signInError && (
          <p className={Classes.SignUpError}> {state.signInError} </p>
        )}
        <div className={Classes.CardContainer}>
          <div className={Classes.Card}>
            <h1 className={Classes.Title}>
              {" "}
              {isLogin ? "Login Now!" : "Register"}{" "}
            </h1>
            {isLogin ? (
              <SignInForm Classes={Classes} />
            ) : (
              <SignUpForm Classes={Classes} />
            )}
          </div>
        </div>
      </div>
      <div className={Classes.ImageContainer}>
        <img
          src={Login}
          className={Classes.Image}
          sizes="cover"
          height="100%"
          width="100%"
          alt="Login background"
        />
        <div className={Classes.IlustrationContent}></div>
        <div className={Classes.Span}>
          <h1 className={Classes.AppTitle}>MoonLight</h1>
          <p className={Classes.Messege}>
            The best place for meet, share and learn with other people
          </p>
          <div className={Classes.BottomContainer}>
            <p>
              {" "}
              {isLogin
                ? "Don't have an account yet ?"
                : "Already have an account ?"}{" "}
            </p>
            <button
              className={Classes.RightButton}
              onClick={() => {
                setIsLogin((prevState) => !prevState);
              }}
            >
              {isLogin ? "Sing Up" : "LogIn"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapDispatchToProps = (dispatch: any) => ({
//   signUp: (data: signUpRequestProps) => dispatch(signUpRequest(data)),
// });

export default SingUp;
