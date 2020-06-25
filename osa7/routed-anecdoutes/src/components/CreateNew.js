import React from 'react'
import { useHistory } from 'react-router-dom'
import useField from '../hooks/index'


const CreateNew = (props) => {
  const history = useHistory()

  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  console.log('props', props)

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0
    }
    )
    history.push('/')
  }

  const handleReset = () => {
    content.reset()
    author.reset()
    info.reset()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form>
        <div>
          content
            <input
            {...content}
          // name='content'
          // type={content.type}
          // value={content.value}
          // onChange={content.onChange}
          />
        </div>
        <div>
          author
            <input
            {...author}
          // name='author'
          // type={author.type}
          // value={author.value}
          // onChange={author.onChange}
          />
        </div>
        <div>
          url for more info
            <input
            {...info}
          // name='info'
          // type={info.type}
          // value={info.value}
          // onChange={info.onChange}
          />
        </div>
        <button onSubmit={handleSubmit}>create</button>
        <button onClick={handleReset}>reset</button>
      </form>
    </div>
  )

}

export default CreateNew