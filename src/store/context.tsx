import React, { createContext, useReducer } from "react";

const authInitialState: AuthContext = {
  user: null,
  userToken: null,
};

const initialAuthFunctions: AuthCotextFunctions = {
  signUp: () => {},
  login: () => {},
  logout: () => {},
  register: () => {},
};

export const authContext = createContext(authInitialState);
export const authFunctions = createContext(initialAuthFunctions);

interface IUserSingUpData {
  userName: string;
  email: string;
  password: string;
}

interface IUserLoginData {
  email: string;
  password: string;
}

interface ReducerAction {
  type: string;
  user?: any;
  userToken?: string;
}

interface AuthContext {
  user: any;
  userToken: string | any;
}

interface AuthCotextFunctions {
  signUp: (userData: IUserSingUpData) => any;
  login: (userData: IUserLoginData) => any;
  register: (userData: AuthContext) => any;
  logout: () => any;
}

// interface AuthData {
//   userId: string | null;
//   userToken: string | null;
// }

const AuthProvider: React.FC = ({ children }) => {
  const initialState = authInitialState;

  const authReducer = (prevState: any, action: ReducerAction) => {
    switch (action.type) {
      case "LOGIN":
        return {
          user: action.user,
          userToken: action.userToken,
        };
      case "REGISTER":
        return {
          user: action.user,
          userToken: action.userToken,
        };
      case "LOGOUT":
        return initialState;

      default:
        break;
    }
  };

  const [authState, dispatch] = useReducer(authReducer, initialState);

  const authFunctionsState = {
    signUp: async (userData: IUserSingUpData) => {
      //mandamos la informacion al servidor
      const response = await fetch("http://localhost:8080/accounts/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
          userName: userData.userName,
        }),
      });
      console.log("hellooooooo", response);

      const data = await response.json();
      console.log(data);
    },
    login: async (userData: IUserLoginData) => {
      //empezamos la sesion y guardamos el token
      const response = await fetch("http://localhost:8080/accounts/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userData.email,
          password: userData.password,
        }),
      });

      const data = await response.json();
      console.log(data);
      dispatch({
        type: "LOGIN",
        user: data.user,
        userToken: data.token,
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
    },
    register: (userData: AuthContext) => {
      dispatch({
        type: "REGISTER",
        user: userData.user,
        userToken: userData.userToken!,
      });
    },
    logout: () => {
      dispatch({
        type: "LOGOUT",
      });

      localStorage.removeItem("token");
      localStorage.removeItem("user");
    },
  };

  return (
    <authContext.Provider value={authState!}>
      <authFunctions.Provider value={authFunctionsState}>
        {children}
      </authFunctions.Provider>
    </authContext.Provider>
  );
};

export default AuthProvider;
