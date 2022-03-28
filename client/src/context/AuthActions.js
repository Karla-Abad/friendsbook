export const LoginStart = (userCredentials) => ({
  type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
  type: "LOGIN_START",
  payload: user,
});

export const LoginFailure = (error) => ({
  type: "LOGIN_START",
  payload: error,
});
