// import axios from "axios";

// export const loginCall = (userCredentials, dispatch) => {
//   dispatch({ type: "LOGIN_START" });
//   console.log(userCredentials);
//   axios
//     .post("http://localhost:8000/api/users/login", userCredentials, {
//       withCredentials: true,
//       credentials: "include",
//     })
//     .then((res) => {
//       console.log(res, "res");
//       console.log(res.data, "is res data!");
//       dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
//     })
//     .catch((err) => {
//       console.log(err);
//       dispatch({ type: "LOGIN_FAILURE", payload: err });
//     });
// };
