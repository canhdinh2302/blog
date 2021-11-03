import React from 'react'
import Author from '@components/Author'
import SectonTitle from '@components/SectonTitle'

const AuthorList = () => (
  <div className="h-content">
    <SectonTitle>Các tác giả</SectonTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-48">
      <Author />
      <Author />
    </div>
  </div>
)

export default React.memo(AuthorList)
