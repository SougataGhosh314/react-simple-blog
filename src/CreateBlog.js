import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [author, setAuthor] = useState("Bruce");

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const url = "http://localhost:8000/blogs";

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {
            title, body, author
        };

        setIsPending(true);

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New blog added");
            setIsPending(false);
            // history.go(-1);
            history.push("/");
        })

    }

    return (
        <div className="create-blog">
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title} 
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required
                    value={body} 
                    onChange={(e) => setBody(e.target.value)}
                ></textarea> 
                <label>Blog Author: </label>
                <select
                    value={author} 
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="Bruce">Bruce</option>
                    <option value="Clark">Clark</option>
                    <option value="Dianna">Dianna</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding your blog...</button>}
                <p>{title}  :  {body}  :  {author}</p>
            </form>
        </div>
    );
}
 
export default CreateBlog;