import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {


    return (
        <div className="md:w-1/3 my-7 bg-gray-300 p-4 rounded-md">
            <h4 className="text-lg lg:text-2xl">Bookmarked Blogs: {bookmarks.length} </h4>
            {
                bookmarks.map(bookmarkInfo => <Bookmark
                    key={bookmarkInfo.id}
                    bookmarkedBlog={bookmarkInfo}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;