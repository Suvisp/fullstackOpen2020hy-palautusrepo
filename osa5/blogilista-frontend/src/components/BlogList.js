import React from 'react'

const BlogList = ({ blog }) => (
  <div>
    {blog.title} {blog.author}
  </div>
)

export default BlogList