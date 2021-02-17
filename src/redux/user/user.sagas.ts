import Axios from "axios";
import { put, takeLatest, all, call } from "redux-saga/effects";
import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from "./user.actions";

import UserActionTypes from "./user.types";

function* SignIn({ payload: { email, password } }: any) {
  try {
    const response = yield Axios.post("/accounts/sign-in", {
      email,
      password,
    });
    const { data } = response;
    const expirationDate = new Date(
      new Date().getTime() + data.userToken.expireSeconds * 1000
    );

    localStorage.setItem("userToken", data.userToken.token);

    localStorage.setItem("tokenExpiration", expirationDate.toISOString());

    console.log(expirationDate);

    yield put(signInSuccess(data));
  } catch (error) {
    yield put(signInFailure("Sign in request fail, plaese try again"));
  }
}

function* SignUp({ payload: { email, password, userName } }: any) {
  try {
    const response = yield Axios.post("/accounts/sign-up", {
      email,
      password,
      userName,
    });
    const { data } = response;
    console.log(response);

    yield put(signUpSuccess(data));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* me({ payload: { token } }: any) {
  try {
    const response = yield Axios.post(
      "/accounts/me",
      {},
      {
        headers: {
          Authorization: `Barear ${token}`,
        },
      }
    );
    const { data } = response;

    yield put(signInSuccess(data));
  } catch (error) {
    yield put(signInFailure("Token expired, please login again"));
  }
}

function* logOut() {
  localStorage.removeItem("userToken");
  localStorage.removeItem("tokenExpiration");

  yield put(signOutSuccess());
}

function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, SignIn);
}

function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, SignUp);
}

function* onMeStart() {
  yield takeLatest(UserActionTypes.ME_REQUEST, me);
}

function* onSignOut() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, logOut);
}

/*



export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getSnapshotFromUserAuth(user, additionalData);
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}



export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}



*/

export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(onSignUpStart),
    call(onMeStart),
    call(onSignOut),
  ]);
}
