
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
 

function App() {

  const [bookmarks, setBookmarks]= useState([])
  const [readingTime, setReadingTime] = useState(0)


  const handleAddToBookmarks = blog =>{
    // console.log('adding bookmarks buttons',blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time) =>{
    // console.log('marking add read',time)
    // setReadingTime(readingTime + time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }

  return (
    <>
      <Header></Header>
      <div className='max-w-7xl mx-auto my-12 px-5 md:flex gap-5'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}
        handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} ></Bookmarks>
      </div>
    </>
  )
}

export default App
