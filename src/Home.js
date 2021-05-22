import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Bruce', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Clark', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Dianna', id: 3 },
        { title: 'Spring top tips', body: 'lorem ipsum dolor...', author: 'Clark', id: 4 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={ blogs } title="All Blogs:" handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;