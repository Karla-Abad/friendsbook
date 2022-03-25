import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'

//Delete the below import, once we have server/db data to work with.
import { Posts } from '../../dummyData'

const Feed = (props) => {


    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />
                {
                    Posts.map((p) => (
                        <Post key={p.id} post={p} />
                    ))
                }

            </div>
        </div>
    )
}
export default Feed
