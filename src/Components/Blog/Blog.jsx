// import { space } from 'postcss/lib/list';
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blogData, handleAddToBookmarks}) => {
    const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blogData;
    return (
        <div className='space-y-3 px-5'>
            <img className='w-full  rounded-md my-7 ' src={cover} alt={`Cover Picture of the title ${title} `} />

            <div className='flex justify-between'>
                <div className='flex '>
                    <img className='w-12 rounded-full' src={author_img} alt="" />
                    <div className='ml-5'>
                        <h5 className="text-2xl">{author}</h5>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} Min Read <button
                    onClick={handleAddToBookmarks}
                    className='ml-3 text-blue-700 text-xl'><FaBookmark></FaBookmark></button> </span>
                </div>
            </div>

            <h3 className="text-3xl">{title}</h3>

            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href='' className='text-blue-900' > #{hash} </a></span>)
                }
            </p>

        </div>
    );
};



Blog.propTypes = {
    blogData: PropTypes.object.isRequired,
}

export default Blog;