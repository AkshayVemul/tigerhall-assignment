import { render } from '@testing-library/react'
import { AppHeader } from './app-header.component'

describe('App Header', () => {
  it('should match snapshot', () => {
    const { container } = render(<AppHeader />)

    expect(container).toMatchSnapshot()
  })
})
