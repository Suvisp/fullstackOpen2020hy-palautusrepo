const dummy = (blogs) => {
  return 1
}

const totalLikes = (blog) => {
  var total = 0
  if (blog.length === 0) {
    return 0
  } if (blog.length === 1) {
    return blog[0].likes
  } else {
    for (var i = 0; i < blog.length; i++) {
      total += blog[i].likes
    }
    return total
  }
}

const favouriteBlog = (blogs) => {
  mostLikes = blogs.reduce(function (prev, current) {
    if (prev.likes > current.likes) {
      return prev
    } else {
      return current
    }
  })
  console.log(mostLikes)
  return mostLikes.likes
}

const mostBlogs = (blogs) => {
  var _ = require('lodash');
  authorWithMostBlogs = (_(blogs).countBy('author').entries().max())
  console.log({ author: authorWithMostBlogs[0], blogs: authorWithMostBlogs[1] })
  return authorWithMostBlogs[1]
}

module.exports = {
  dummy,
  totalLikes,
  favouriteBlog,
  mostBlogs
}