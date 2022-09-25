import { toast } from "react-toastify";
import {
  loginFailure,
  loginStart,
  loginSuccess,
} from "./features/user/userRedux";
import { publicRequest } from "./requestMethods";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("users/login", user);
    if (res.data.message === "A Confirmation Email Has Been Sent!!!") {
      toast.info(
        `We Noticed Your Email Has Not Been Verified So ${res.data.message}`
      );
    }
    dispatch(loginSuccess(res.data));
  } catch (err) {
    toast.error(err.response.data.error);
    console.log(err);
    dispatch(loginFailure());
  }
};
