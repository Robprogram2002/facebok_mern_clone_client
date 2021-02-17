import UserActionTypes from "./user.types";

export const signInSuccess = (user: any) => ({
  type: UserActionTypes.SIGN_IN_SUCCESS,
  payload: user,
});

export const signInFailure = (error: string) => ({
  type: UserActionTypes.SIGN_IN_FAILURE,
  payload: { messege: error },
});

export const signInRequest = (loginData: {
  email: string;
  password: string;
}) => ({
  type: UserActionTypes.SIGN_IN_START,
  payload: loginData,
});

export interface signUpRequestProps {
  email: string;
  password: string;
  userName: string;
}

export const signUpRequest = (data: signUpRequestProps) => ({
  type: UserActionTypes.SIGN_UP_START,
  payload: data,
});

export const signUpSuccess = (data: any) => ({
  type: UserActionTypes.SIGN_UP_SUCCESS,
  payload: data,
});

export const signUpFailure = (error: any) => ({
  type: UserActionTypes.SIGN_UP_FAILURE,
  payload: error,
});

export const meRequest = (token: string) => ({
  type: UserActionTypes.ME_REQUEST,
  payload: {
    token,
  },
});

export const startApp = () => ({
  type: UserActionTypes.START_APP,
});

export const logOut = () => ({
  type: UserActionTypes.SIGN_OUT_START,
});

export const signOutSuccess = () => ({
  type: UserActionTypes.SIGN_OUT_SUCCESS,
});
