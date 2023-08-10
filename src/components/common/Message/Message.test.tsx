import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Message } from '.'

describe('Message', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Message>Children</Message>)

    expect(getByText('Children')).toBeInTheDocument()
  })
})
