import { useHistory, useParams } from "react-router";
import { useState } from "react";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch("http://localhost:8000/blogs/" + id);

    const history = useHistory();
    const [isPending, setIsPending] = useState(false);

    const handleDelete = () => {
        setIsPending(true);
        fetch("http://localhost:8000/blogs/" + blog.id, {
            method: "DELETE",
        })
        .then(() => {
            setIsPending(false);
            history.push("/");
        })
    }
    
    return (
        <div className="blog-details">
            {isLoading && <div>Loading blog...</div>}
            {error && <div>{ error }</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Author: {blog.author}</p>
                    <div>{blog.body}</div>
                    {!isPending && <button onClick={handleDelete}>delete</button>}
                    {isPending && <button disabled>deleting blog...</button>}
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;