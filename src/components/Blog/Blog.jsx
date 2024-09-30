import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ShowBlog from "../ShowBlog/ShowBlog";
const Blog = ({ handleCart, handleReading }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch("blogDb.json")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="md:w-2/3 ">
            {blogs.map((blog) => (
                <ShowBlog
                    handleCart={handleCart}
                    key={blog.id}
                    blog={blog}
                    handleReading={handleReading}
                />
            ))}
        </div>
    );
};
Blog.propTypes = {
    handleCart: PropTypes.func,
    handleReading: PropTypes.func,
};
export default Blog;
