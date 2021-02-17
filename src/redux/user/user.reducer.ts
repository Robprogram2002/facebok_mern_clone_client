import { ReducerAction } from "../redux.types";
import ActionTypes from "./user.types";

export type UserState = {
  currentUser: any | null;
  signUpError: string | null;
  loading: boolean;
  signUpSuccess: string | null;
  signInError: string | null;
  signInSuccess: boolean;
  initialLoading: boolean;
};

const INITIAL_STATE: UserState = {
  currentUser: null,
  signUpError: null,
  loading: false,
  signUpSuccess: null,
  signInError: null,
  signInSuccess: false,
  initialLoading: true,
};

const userReducer = (state = INITIAL_STATE, action: ReducerAction) => {
  switch (action.type) {
    case ActionTypes.SIGN_UP_START:
      return {
        ...state,
        loading: true,
        signUpError: null,
        signUpSuccess: null,
      };
    case ActionTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpSuccess: "Sign Up success",
        loading: false,
      };
    case ActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        signUpError: "Sign up request fail, please try again",
        loading: false,
      };

    case ActionTypes.SIGN_IN_START:
      return {
        ...state,
        loading: true,
        signInError: null,
      };
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload.user,
        signInSuccess: true,
        loading: false,
        initialLoading: false,
      };
    case ActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        initialLoading: false,
        loading: false,
        signInError: action.payload.errorMessege,
      };

    case ActionTypes.START_APP:
      return {
        ...state,
        initialLoading: false,
      };

    case ActionTypes.SIGN_OUT_START:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.SIGN_OUT_SUCCESS:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default userReducer;
