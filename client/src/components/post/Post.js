import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState } from "react";

const Post = (props) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  //We will use this Folder URL to have the app find the photos from our dummydata file from different components.-Karla
  //Create a .env file inside client folder with this: REACT_APP_PUBLIC_FOLDER = http://localhost:3000/assets/

  const { post } = props;

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    //isLiked is false to begin. If you click the like button, it will add one to the count, then it sets isLiked to true. This makes it so that if you click the like button a second time, now isLiked is true, so it subtracts 1 from the count.
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
            />

            {/* Filtering my list of users from dummy data, where the user id === the post.userid, then calling the index of 0.username to get this specific user's name */}
            <span className="postUsername">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>

        <div className="postCenter">
          {/* Since some of the dummy Post data we are using doesnt have a value for 'desc', we can use post?.desc and it appears that this is a type of ternary. So if post.desc is true, meaning this post has has a description, display here. if it doesnt, dont display/dont break..: -jackson */}
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post.photo} alt="" />
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
