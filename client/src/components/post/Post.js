import "./post.css";
import { Backspace } from "@material-ui/icons";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
//^^^: To install the above library run:  npm install timeago.js

const Post = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  //^^link to our path to our temp photos/stock photos
  //We will use this Folder URL to have the app find the photos from our dummydata file from different components.-Karla
  //Create a .env file inside client folder with this: REACT_APP_PUBLIC_FOLDER = http://localhost:3000/assets/

  const { post, removeFromDom } = props;

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);

  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  //This will allow it to correctly display liked or unliked. Not working properly yet as axios is not finding the cur
  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/users/${post.user}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [post.user]);

  const likeHandler = () => {
    axios
      .put(`http://localhost:8000/api/posts/${post._id}/like`, {
        user: currentUser._id,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    //isLiked is false to begin. If you click the like button, it will add one to the count, then it sets isLiked to true. This makes it so that if you click the like button a second time, now isLiked is true, so it subtracts 1 from the count.
  };

  const handleDelete = (postId) => {
    axios
      .delete("http://localhost:8000/api/posts/" + postId)
      .then((res) => {
        removeFromDom(postId);
        // navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                className="postProfileImg"
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "users/noAvatar.png"
                }
                alt=""
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            <button
              onClick={(e) => handleDelete(post._id)}
              className="deleteButton"
            >
              <Backspace />
            </button>
          </div>
        </div>

        <div className="postCenter">
          {/* Since some of the dummy Post data we are using doesnt have a value for 'desc', we can use post?.desc and it appears that this is a type of ternary. So if post.desc is true, meaning this post has has a description, display here. if it doesnt, dont display/dont break..: -jackson */}
          <span className="postText">{post?.desc}</span>

          {/* NOTE: I added: "posts/" since in Postman, i put the name of a photo from one of our assests. likely will have to edit this later.  */}
          {/* <img className="postImg" src={PF + "posts/post2.jpg"} alt="" /> */}
          <img className="postImg" src={PF + post.img} alt="" />
        </div>

        <div className="postBottom">
          <div className="postBottomLeft">
            {/* Created likeHandler/onClick, to handle our user's number of likes : -jackson  */}

            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likeHandler}
              alt=""
            />

            <span className="postLikeCounter">{like} people liked it.</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
