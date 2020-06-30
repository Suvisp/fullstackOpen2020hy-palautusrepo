import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BlogForm from './BlogForm'

describe('BlogForm tests:', () => {
  let component
  let mockHandler = jest.fn()

  beforeEach(() => {

    component = render(<BlogForm createBlog={mockHandler} />)
  })

  test('CreateBlog callbackfunction works with correct data', () => {
    const form = component.container.querySelector('form')

    const titleInput = component.container.querySelector('#title')
    const authorInput = component.container.querySelector('#author')
    const urlInput = component.container.querySelector('#url')

    fireEvent.change(titleInput, { target: { value: 'otsikko' } })
    fireEvent.change(authorInput, { target: { value: 'kirjoittaja' } })
    fireEvent.change(urlInput, { target: { value: 'osoite' } })

    fireEvent.submit(form)

    expect(mockHandler.mock.calls).toHaveLength(1)
    expect(mockHandler.mock.calls[0][0]).toEqual({
      title: 'otsikko',
      author: 'kirjoittaja',
      url: 'osoite',
    })
  })
})