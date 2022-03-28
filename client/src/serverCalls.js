import axios from "axios";

export const loginCall = (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  console.log(userCredentials);
  axios
    .post(
      "http://localhost:8000/api/users/login",
      {
        email: userCredentials.email,
        password: userCredentials.password,
      }
      //   {
      //     withCredentials: true,
      //   }
    )
    .then((res) => {
      console.log(res, "res");
      console.log(res.data, "is res data!");
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      //   console.log(err.res);
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    });
};
