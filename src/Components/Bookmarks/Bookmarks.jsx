import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {


    return (

        <div className="md:w-1/3 my-7">

            <h3 className='text-2xl bg-red-200 p-4 rounded-md mb-5'>Reading Time: {readingTime} min </h3>
            <div className=' bg-gray-300 p-4 rounded-md'>
                <h4 className="text-lg lg:text-2xl">Bookmarked Blogs: {bookmarks.length} </h4>
                {
                    bookmarks.map(bookmarkInfo => <Bookmark
                        key={bookmarkInfo.id}
                        bookmarkedBlog={bookmarkInfo}
                    ></Bookmark>)
                }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.func
}

export default Bookmarks;