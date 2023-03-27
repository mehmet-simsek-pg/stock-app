import { useDispatch } from "react-redux";
import { fetchFail, getSuccess, fetchStart } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCall = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStockData = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`stock/${url}/`);
      dispatch(getSuccess({ data, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };

  const createStockData = async (url, firm) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`stock/${url}/`, firm);
      toastSuccessNotify(`${url} successfuly created`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} could not be created`);
    }
  };

  const updateStockData = async (url, id, firm) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`stock/${url}/${id}/`, firm);
      toastSuccessNotify(`${url} successfuly updated`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} could not be edited`);
    }
  };

  const deleteStockData = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`stock/${url}/${id}/`);
      toastSuccessNotify(`${url} successfuly deleted`);
      getStockData(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} can not be deleted`);
    }
  };

  return { getStockData, createStockData, updateStockData, deleteStockData };
};

export default useStockCall;
