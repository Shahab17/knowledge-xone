import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({ handleAddToBookmarks, handleMarkAsRead }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])


    return (
        <div className="md:w-2/3">
            <h4 className="text-xl lg:text-3xl ">Blogs: {blogs.length} </h4>
            {
                blogs.map(blogInfo => <Blog
                    key={blogInfo.id}
                    blogData={blogInfo}
                    handleAddToBookmarks={handleAddToBookmarks}
                    handleMarkAsRead={handleMarkAsRead}

                ></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handleAddToBookmarks: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}

export default Blogs;