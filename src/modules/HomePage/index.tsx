import React from 'react'
import RecentBlogs from './components/RecentBlogs'
import PopularBlogs from './components/PopularBlogs'
import AuthorList from './components/AuthorList'

const HomePage = () => (
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-48 h-content">
    <div className="lg:col-span-8">
      <RecentBlogs />
    </div>

    <div className="lg:col-span-4 pt-36 grid grid-cols-1 gap-48 h-content">
      <AuthorList />
      <PopularBlogs />
    </div>
  </div>
)

export default React.memo(HomePage)
