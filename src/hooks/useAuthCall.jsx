import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { fetchFail, fetchStart, loginSuccess } from "../features/authSlice";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (userInfo) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL;

    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      dispatch(loginSuccess(data));
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}account/auth/logout/`);
      dispatch(logoutSuccess());
      toastSuccessNotify("Logout performed");
      navigate("/");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Logout can not be performed");
    }
  };

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/register/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Register performed");
      navigate("/stock");
    } catch (err) {
      dispatch(fetchFail());
      toastErrorNotify("Register can not be performed");
    }
  };

  return { login, register, logout };
};

export default useAuthCall;
