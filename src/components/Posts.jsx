import { Link } from "react-router-dom"

const Posts = (props) => {
    // console.log(props)
    return (
        <div>
            <h2>Posts</h2>
        <div>
            {
            props.allPosts.length ? props.allPosts.map((singlePost) => {
                return(
                    <div key={singlePost.id}>
                        <p>Title: {singlePost.title}</p>
                        <p>Price: {singlePost.price}</p>
                        <Link to={'/${singlePost.id}'} > See Details About {singlePost.title}</Link>
                    </div>
                )
            }) : <p>Loading...</p>
        }
        </div>
        </div>
    )
}

export default Posts;