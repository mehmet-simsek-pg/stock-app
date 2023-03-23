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
      console.log(data);
    } catch (error) {
      dispatch(fetchFail());
      console.log(error);
    }
  };

  return { login };
};

export default useAuthCall;
