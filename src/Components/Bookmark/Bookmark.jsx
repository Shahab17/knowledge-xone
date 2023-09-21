import PropTypes from 'prop-types';

const Bookmark = ({ bookmarkedBlog }) => {
    const { title } = bookmarkedBlog;
    return (
        <div className='bg-slate-200 p-3   rounded-lg my-7'>
            <h3 className=' lg:text-xl'> <a href="../Blog/Blog.jsx">{title}</a> </h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmarkedBlog: PropTypes.object.isRequired,
}

export default Bookmark;