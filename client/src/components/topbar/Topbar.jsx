// import "./topbar.css";
// import { Search, Person, Chat, Notifications } from "@material-ui/icons";
// import { Link } from "react-router-dom";
// // import { useContext } from "react";
// // import { AuthContext } from "../../context/AuthContext";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Topbar(props) {
//   //Added link to our Topbar Logo, now it will take you from the profile page to the home page. - jackson

//   // const {user, isFetching, error, dispatch} = useContext(AuthContext);

//   const { user } = props;

//   const PF = process.env.REACT_APP_PUBLIC_FOLDER;
//   const navigate = useNavigate();

//   const logout = (e) => {
//     axios
//       .post(
//         "http://localhost:8000/api/users/logout",
//         {},
//         { withCredentials: true }
//       )

//       .then((res) => {
//         console.log(res.data);
//         navigate("/");
//       })
//       .catch((err) => console.log(err));
//   };
// const logout = (e) => {
//   axios
//     .post(
//       "http://localhost:8000/api/users/logout",
//       {},
//       {
//         withCredentials: true,
//         credentials: "include",
//       }
//     )
//     .then((res) => {
//       console.log(res);
//       console.log(res.data);
//       // dispatch({ type: "LOGIN_FAILURE" }); //We need for the user state to change to null. This is established in useReducer cases for LOGIN_START and LOGIN_FAILURE. Tried LOGIN_START first, but since isFetching is true for that case, it would keep showing buttons as trying to get something. LOGIN_FAILURE case isFetching=False though it returns to an initial state.
//       navigate("/login");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

//   return (
//     <div className="topbarContainer">
//       <div className="topbarLeft">
//         <Link to="/home" style={{ textDecoration: "none" }}>
//           <span className="logo">Friendsbook</span>
//         </Link>
//       </div>
//       <div className="topbarCenter">
//         <div className="searchbar">
//           <Search className="searchIcon" />
//           <input
//             placeholder="Search for friends, posts or videos."
//             className="searchInput"
//           />
//         </div>
//       </div>
//       <div className="topbarRight">
//         <div className="topbarLinks">
//           <span className="topbarLink">Homepage</span>
//           <span className="topbarLink">Timeline</span>
//         </div>
//         <div className="topbarIcons">
//           <div className="topbarIconItem">
//             <Person />
//             <span className="topbarIconBadge">1</span>
//           </div>
//           <div className="topbarIconItem">
//             <Chat />
//             <span className="topbarIconBadge">2</span>
//           </div>
//           <div className="topbarIconItem">
//             <Notifications />
//             <span className="topbarIconBadge">1</span>
//           </div>
//         </div>
//         <Link to={`/profile/${user.username}`}>
//           <img
//             src={
//               user.profilePicture
//                 ? PF + user.profilePicture
//                 : PF + "users/noAvatar.png"
//             }
//             alt=""
//             className="topbarImg"
//           />
//         </Link>
//         <button className="logout" onClick={logout}>
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// }
