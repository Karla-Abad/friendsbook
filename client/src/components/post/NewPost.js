import "./post.css";
import { Backspace } from "@material-ui/icons";
import axios from "axios";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { useState, useEffect } from "react";


const NewPost = (props) => {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const SIF = process.env.REACT_APP_SERVER_FOLDER;

    const { post, removeFromDom, profile, posts } = props;

    const [user, setUser] = useState({});
    const [like, setLike] = useState('');
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${post.user}`)
            .then((res) => {
                // console.log('i am here')
                // console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [post.user]);



    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }

    
    const handleDelete = (postId) => {
        axios.delete("http://localhost:8000/api/posts/" + postId)
            .then((res) => {
                removeFromDom(postId);
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <div className="post" key={post._id}>
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <Link to={`/profile/${user.username}`}>
                                <img
                                    className="postProfileImg"
                                    src={
                                        user.profilePicture
                                            ? user.profilePicture
                                            : PF + "users/noAvatar.png"
                                    }
                                    alt=""
                                />
                            </Link>
                            {/* This is code to get username to display on the profile page. <span className="postUsername">{post?.user.username}</span> */}
                            <span className="postUsername">{user.username ? user.username : post.user.username}</span>

                            <span className="postDate">{format(post.createdAt)}</span>
                        </div>
                        
                        <div className="postTopRight">
                            {user._id === posts.user &&
                            <button
                            onClick={(e) => handleDelete(post._id)}
                            className="deleteButton"
                            >
                            <Backspace  />
                        </button>
                        }
                        </div>
                    </div>

                    <div className="postCenter">
                        {/* Since some of the dummy Post data we are using doesnt have a value for 'desc', we can use post?.desc and it appears that this is a type of ternary. So if post.desc is true, meaning this post has has a description, display here. if it doesnt, dont display/dont break..: -jackson */}
                        <span className="postText">{post?.desc}</span>

                        {/* NOTE: I added: "posts/" since in Postman, i put the name of a photo from one of our assests. likely will have to edit this later.  */}
                        {/* <img className="postImg" src={PF + "posts/post2.jpg"} alt="" /> */}
                        <img className="postImg" src={`${PF}${post.img}`} alt="" />
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

                            <span className="postLikeCounter">{like ? like : 0} people liked it.</span>
                        </div>
                        <div className="postBottomRight">
                            <span className="postCommentText">{post.comment} Comments</span>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default NewPost