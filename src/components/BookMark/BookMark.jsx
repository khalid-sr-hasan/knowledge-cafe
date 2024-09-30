import PropTypes from "prop-types";
const BookMark = ({ cart, readingTime }) => {
    // let readTime = 0;
    // for (const reding of read) {
    //     readTime = readTime + reding.reading_time;
    // }
    return (
        <div className="md:w-1/3">
            <div className="sticky top-2">
                <div className="bg-[rgba(96,71,236,0.17)] py-5 rounded-md text-center border border-[#725BEE]">
                    <h1 className="text-[#725BEE] text-base font-bold">
                        Spend time on read : {readingTime} min
                    </h1>
                </div>
                <div className="bg-[#F3F3F3] p-8 mt-6 rounded-md">
                    <h2 className="font-bold text-base">
                        Bookmarked Blogs : {cart.length}
                    </h2>
                    {cart.map((bookMarked, index) => (
                        <div
                            key={index}
                            className="rounded-md mt-5 p-5 bg-white"
                        >
                            <p>{bookMarked.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
BookMark.propTypes = {
    cart: PropTypes.array.isRequired,
    readingTime: PropTypes.number,
};
export default BookMark;
