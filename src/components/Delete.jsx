import { useNavigate } from "react-router-dom";
import { deletePost } from "../api-adapters";

function Delete (props) {
    const allPosts = props.allPosts;
    const setAllPosts = props.setAllPosts;
    const postInfo = props.postInfo;
    const navigate = useNavigate();
    const deleteButton = async () => {
        try {
            const response = await deletePost(postInfo._id)
            const refreshedPosts = allPosts.filter((post) => post._id !== postInfo._id );
            setAllPosts(refreshedPosts);
            navigate("/");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <button onClick={deleteButton} >
            Delete
        </button>
    );
}

export default Delete;