import './post.css'
import { MoreVert, } from '@material-ui/icons'

const Post = (props) => {

    return (
        <div className='post'>
            <div className="postWrapper">

                <div className="postTop">
                    <div className="postTopLeft">
                        <img className='postProfileImg' src="/assets/users/1.jpg" alt="" />
                        <span className='postUsername'>Rachel Spillman</span>
                        <span className='postDate'>5 mins ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>

                <div className="postCenter">
                    <span className="postText">Hey everyone, Its my first Post!</span>
                    <img className='postImg' src="/assets/posts/post1.jpg" alt="" />
                </div>

                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className='likeIcon' src="/assets/like.png" alt="" />
                        <img className='likeIcon' src="/assets/heart.png" alt="" />
                        <span className="postLikeCounter">32 people liked it.</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 Comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post

