import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";



const Blogs = ({ handleAddToBookmarks }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3">
            <h4 className="text-3xl ">Blogs: {blogs.length} </h4>
            {
                blogs.map(blogInfo => <Blog
                    key={blogInfo.id}
                    blogData={blogInfo}
                    handleAddToBookmarks={handleAddToBookmarks}

                ></Blog>)
            }
        </div>
    );
};

export default Blogs;