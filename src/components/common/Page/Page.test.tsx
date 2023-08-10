import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import { Page } from '.'

describe('Page', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Page>Children</Page>)

    expect(getByText('Children')).toBeInTheDocument()
  })
})
