import { useEffect, useState } from "react";
import { fetchPosts } from "../api-adapters";
import { Link } from "react-router-dom";

const Posts = ({ }) => {
    const [allPosts, setAllPosts] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchAllPosts = async () => {
            try {
                const results = await fetchPosts(); 
                setAllPosts(results);
            } catch (error) {
                console.log(error);
            }
        };
        fetchAllPosts();
    }, []);

    const searchBar = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredPosts = allPosts.filter((thePost) => {
        return (
            thePost.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    });
    return (
        <div>
            <h1>All Posts</h1>
            <input
                type="text"
                placeholder="Search For Post"
                value={searchQuery}
                onChange={searchBar}
            />
            <div className="all-posts-container">
                {filteredPosts.map((singlePost) => {
                    return (
                        <div key={singlePost._id} className="single-post-card">
                            <h2>{singlePost.title}</h2>
                            <p>User: {singlePost.author.username}</p>
                            <Link to ={`/posts/${singlePost._id}`}><button>See Details</button></Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Posts;