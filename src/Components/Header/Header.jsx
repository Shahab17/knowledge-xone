 import profile from '../../images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center m-4 p-3 border-b-2 '>
             <h1 className='text-4xl font-semibold'> Knowledge Xone </h1>
             <img src={profile}alt="" />
        </div>
    );
};

export default Header;