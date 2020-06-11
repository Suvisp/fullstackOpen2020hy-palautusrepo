import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
// import { prettyDOM } from '@testing-library/dom'
import BlogList from './BlogList'

describe('Visible content', () => {
  let component

  beforeEach(() => {
    const blog = {
      title: 'Pinaatissa on paljon rautaa',
      author: 'Kippari-Kalle',
      url: 'www.kipparikalle.fi',
      likes: 1,
      user: {
        name: 'Joni-Petteri',
        username: 'Jope'
      }
    }
    const user = {
      name: 'Joni-Petteri',
      username: 'Jope'
    }
    // const mockHandler = jest.fn()
    component = render(<BlogList blog={blog} user={user}/>)
  })

  // component.debug()

  test('renders title and author of a blog, not likes and url', () => {
    expect(component.container).toHaveTextContent('Pinaatissa on paljon rautaa')
    expect(component.container).toHaveTextContent('Kippari-Kalle')
    expect(component.container).not.toHaveTextContent('www.kipparikalle.fi')
    expect(component.container).not.toHaveTextContent('1')


  })

})