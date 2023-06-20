import { useParams } from "react-router-dom";

const SinglePost = ({ allPosts, setAllPosts }) => {
    const {id} = useParams();
    const selectedPost = allPosts.find((singlePost) => {
        if (singlePost._id == id) {
            console.log(singlePost);
            return singlePost;
        }
    }); 
    return (
        <div>
            <h2>{selectedPost.title}</h2>
            <h4>Posted By: {selectedPost.author.username}</h4>
            <p>{selectedPost.description}</p>
            <p>Price: {selectedPost.price}</p>
            <p>Location: {selectedPost.location}</p>
            <p>Will Deliver: {selectedPost.willDeliver ? <p>Yes</p> : <p>No</p>}</p>
            <p>Post Created: {selectedPost.createdAt}</p>
            <p>Last Updated: {selectedPost.updatedAt}</p>
        </div>
    )
}

export default SinglePost;