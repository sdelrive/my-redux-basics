import { async } from "@firebase/util";
import { DateRange } from "@mui/icons-material";
import {
  loginWithEmailPassword,
  registerUser,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const startLoginWithEmailPassword = (data) => {
  return async (dispatch) => {
    dispatch(loginWithEmailPassword(data));
  };
};
export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (result.ok) {
      dispatch(login(result));
    } else {
      dispatch(logout(result.errorMessage));
    }
  };
};
export const startCreatingUser = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const { ok, uid, photoURL, errorMessage } = await registerUser({
      email,
      password,
      displayName,
    });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ uid, displayName, email, photoURL }));
  };
};
