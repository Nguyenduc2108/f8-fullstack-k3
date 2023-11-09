import { useContext } from "react";
import { ProviderContext } from "../core/Provider";

export const useSelector = () => {
  const { state } = useContext(ProviderContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(ProviderContext);
  return dispatch;
};

//Custom hook
