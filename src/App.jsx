
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
 

function App() {

  const [bookmarks, setBookmarks]= useState([])

  const handleAddToBookmarks = blog =>{
    // console.log('adding bookmarks buttons',blog)
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <>
      <Header></Header>
      <div className='max-w-7xl mx-auto my-12 px-5 md:flex gap-5'>
        <Blogs handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
