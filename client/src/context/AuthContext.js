import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    profilePicture: "",
    coverPicture: "",
    _id: "62421106e7676737b92193d9",
    username: "littleMermaid1",
    email: "littleMermaid1@gmail.com",
    isAdmin: false,
    followers: [""],
    following: [""],
  },
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

//This is a wrapper that will be around the whole App to avoid having to pass down props/states from component to component. It will allow us to let any of the components know the  state of current user. The app will be wrapped in index.js file. - Karla
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    //All below values will be shared with all children/components.  - Karla
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
    //children will be App and all its children, thus all components. - Karla
  );
};
