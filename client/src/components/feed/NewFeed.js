import "./feed.css";
// import Post from "../post/Post";
import NewPost from "../post/NewPost";
import NewShare from "../share/NewShare";


const NewFeed = (props) => {

    const { posts, setPosts, user } = props

    const removeFromDom = (postId) => {
        setPosts(posts.filter((post) => post._id !== postId)) 
    };

    return (
        <div className="feed">
            <div className="feedWrapper">

                <NewShare setPosts={setPosts} posts={posts} user={user} />
                <div className="flex">
                { posts.map((p) => (
                    <NewPost key={p._id} removeFromDom={removeFromDom} post={p} posts = {posts} />
                ))}
                </div>
            </div>
        </div>
    );
}
export default NewFeed