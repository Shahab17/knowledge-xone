import PropTypes from 'prop-types'; 

const Blog = ({blogData}) => {
    console.log(blogData)
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes ={
    blogData: PropTypes.object.isRequired,
}

export default Blog;