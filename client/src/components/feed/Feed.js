import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useState, useEffect } from 'react'
import axios from 'axios'

//Delete the below import, once we have server/db data to work with.
// import { Posts } from '../../dummyData'

const Feed = (props) => {

    const { username } = props
    const [posts, setPosts] = useState([])


    useEffect(() => {
        // axios.get(`http://localhost:8000/api/posts/timeline/${user.id}`)
        //^^: this is likely what we will replace the 'catchThemAll' line with. 

        username
            ? axios.get(`http://localhost:8000/api/posts/profile/${username}`)
                .then(res => {
                    console.log(res.data)
                    setPosts(res.data)
                })
                .catch(err => console.log(err))
            : axios.get('http://localhost:8000/api/posts/all/catchThemAll')
                .then(res => {
                    console.log(res.data)
                    setPosts(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
    }, [username])

    return (
        <div className='feed'>
            <div className="feedWrapper">
                <Share />

                {
                    posts.map((p) => (
                        <Post key={p._id} post={p} />
                    ))
                }

            </div>
        </div>
    )
}
export default Feed
