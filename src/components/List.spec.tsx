import {
  render,
  waitFor,
  waitForElementToBeRemoved
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('List Component', () => {
  it('should render list items', () => {
    const { getByText } = render(<App />)

    expect(getByText('Diego')).toBeInTheDocument()
    expect(getByText('Rodz')).toBeInTheDocument()
    expect(getByText('Mayk')).toBeInTheDocument()
  })

  it('should be able to add new item to the list', async () => {
    const {
      getByText,
      getByPlaceholderText,
    } = render(<App />)

    const inputElement = getByPlaceholderText('New item')
    const addButton = getByText('Adicionar')

    userEvent.type(inputElement, 'Marcus')
    console.log(inputElement)
    userEvent.click(addButton)

    await waitFor(() => {
      expect(getByText('Marcus')).toBeInTheDocument()
    })
  })

  it('should be able to remove from the list', async () => {
    const {
      getByText,
      getAllByText
    } = render(<App />)

    const removeButtons = getAllByText('Remover')
    userEvent.click(removeButtons[0])

    await waitForElementToBeRemoved(() => {
      return getByText('Diego')
    })
  })
})

// https://www.youtube.com/watch?v=edXudaVB0Bg&ab_channel=Rocketseat
// 48:40