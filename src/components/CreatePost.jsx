import { useState } from "react";
import { createNewPost } from "../api-adapters";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice]= useState(""); 
    const [location, setLocation] = useState("");
    const [willDeliver, setWillDeliver] = useState(false);

    const checkDeliver = () => {
        setWillDeliver(!willDeliver)
    }

    async function submit(event) {
        event.preventDefault();

        try {
            const result = await createNewPost(
                title, description, price, location, willDeliver
            );
            console.log(result) 
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form>
                <form onSubmit={submit}>
                    <label htmlFor="title">Title: </label>
                    <input 
                    type="text"
                    name="title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)} />

                    <label htmlFor="description">Description: </label>
                    <input 
                    type="text"
                    name="description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)} />

                    <label htmlFor="price">Price: </label>
                    <input 
                    type="text"
                    name="price"
                    value={price}
                    onChange={(event) => setPrice(event.target.value)} />

                    <label htmlFor="location">Location: </label>
                    <input 
                    type="text"
                    name="location"
                    value={location}
                    onChange={(event) => setLocation(event.target.value)} />

                    <label htmlFor="willDeliver">Will Deliver: </label>
                    <input 
                    type="checkbox"
                    name="willDeliver"
                    value={willDeliver}
                    onChange={checkDeliver}
                    checked={willDeliver} />

                    <button type="submit">Create New Post</button>

                </form>
            </form>
        </div>
    );
}

export default CreatePost;