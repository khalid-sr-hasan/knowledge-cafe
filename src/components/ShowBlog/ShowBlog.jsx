import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const ShowBlog = ({ blog, handleCart, handleReading }) => {
    const {
        id,
        cover,
        title,
        author,
        author_img,
        reading_time,
        hashtags,
        posted_date,
    } = blog;
    return (
        <div className="mb-10 border-b-2">
            <div>
                <img className="w-full rounded-xl" src={cover} alt="" />
            </div>
            <div className="px-1">
                <div className="flex justify-between items-center">
                    <div className="flex my-4 items-center gap-2">
                        <img className="w-16" src={author_img} alt="" />
                        <div>
                            <h3>{author}</h3>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1 md:gap-2">
                        <span className="text-sm md:text-xl text-[#6b6b6bbb]">
                            {reading_time} min read time
                        </span>
                        <FaRegBookmark
                            onClick={() => handleCart(blog)}
                            className="text-xl cursor-pointer"
                        />
                    </div>
                </div>
                <h1 className="text-2xl font-bold md:text-4xl">{title}</h1>
                <div className="flex gap-2 my-4">
                    {hashtags.map((hashTag, index) => (
                        <p key={index}>#{hashTag}</p>
                    ))}
                </div>
                <button
                    onClick={() => handleReading(id, reading_time)}
                    className="mb-7 text-[#725BEE] border-b border-[#725BEE]"
                >
                    Mark as read
                </button>
            </div>
        </div>
    );
};

ShowBlog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleCart: PropTypes.func,
    handleReading: PropTypes.func,
};

export default ShowBlog;
