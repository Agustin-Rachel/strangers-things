import { useEffect, useState } from "react";
import { myData } from "../api-adapters";

const Profile = () => {
    const [profile, setProfile] = useState({});
    const [myPosts, setMyPosts] = useState([]);
    const [myMessages, setMyMessages] = useState({}); 

    useEffect(() => {
        const fetchProfile = async () => {
            const result = await myData();
            setProfile(result.data);
            setMyPosts(result.posts);
            setMyMessages(result.messages);
        };
        fetchProfile();
    }, []);

    return (
        <div>
            <h2>My Profile</h2>
            <p>Hello {profile.username}!</p>

            <h2>My Messages</h2>
            {myMessages ? (
                <div>
                    {myMessages.map((post) => {
                        return <p>{post.content}</p>;
                    })}
                </div>
            ) : (
                <h3>No Messages</h3>
            )}

            <h2>My Posts</h2>
            {myPosts ? (
                <div>
                    {myPosts.map((post) => {
                      return <p>{post.title}</p>;
                    })}
                </div>
            ): (
                <h3>You currently have no posts!</h3>
            )}
        </div>
    );
}
export default Profile;