import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogList from './BlogList'

describe('BlogList tests:', () => {
  let component
  let mockHandler = jest.fn()

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

    component = render(<BlogList blog={blog} user={user} addLikes={mockHandler}/>)
  })

  test('At first page renders title and author of a blog, not url and likes', () => {
    expect(component.container).toHaveTextContent('Pinaatissa on paljon rautaa')
    expect(component.container).toHaveTextContent('Kippari-Kalle')
    expect(component.container).not.toHaveTextContent('www.kipparikalle.fi')
    expect(component.container).not.toHaveTextContent('1')
  })

  test('When the view-button is clicked, url and likes are also rendered', () => {
    const viewButton = component.getByText('view')
    fireEvent.click(viewButton)

    expect(component.container).toHaveTextContent('Pinaatissa on paljon rautaa')
    expect(component.container).toHaveTextContent('Kippari-Kalle')
    expect(component.container).toHaveTextContent('www.kipparikalle.fi')
    expect(component.container).toHaveTextContent('1')
  })

  test('When likes-button is clicked twice, the eventhandler gets called twice', () => {
    const viewButton = component.getByText('view')
    fireEvent.click(viewButton)

    const likeButton = component.getByText('like')
    fireEvent.click(likeButton)
    fireEvent.click(likeButton)

    expect(mockHandler.mock.calls).toHaveLength(2)
  })

})