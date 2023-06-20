import { useState } from "react";
import { postMessage, updatePost } from "../api-adapters";

function Message (props) {
    const [textBox, setTextBox] = useState(false);
    const [message, setMessage] = useState("");
    const {postInfo, allPosts, setAllPosts} = props;

    const handleClick = () => {
        setTextBox(true);
    };

    const sendMessage = async () => {
        try {
            const response = await postMessage(postInfo._id, message); 
            const refreshedPost = {
                ...postInfo, 
                messages: [...postInfo.messages, response],
            };
            const refreshedPosts = allPosts.map((post) => {
                post._id === postInfo._id ? updatePost : post
            });
            setAllPosts(updatePosts);
            setTextBox(false);
        } catch (error) {
            console.log(error);
        }
    }; 

    const input = (e) => {
        setMessage(e.target.value);
    }; 

    if (textBox) {
        return (
            <div>
                <input 
                type="text"
                value={message}
                onChange={input}
                />
                <button onClick={sendMessage}>Send Message</button>
            </div>
        )
    }
    return <button onClick={handleClick}>Message</button>;
}

export default Message;