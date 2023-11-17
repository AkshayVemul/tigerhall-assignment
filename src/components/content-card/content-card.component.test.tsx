import { render } from '@testing-library/react'
import { ContentCard } from './content-card.component'

describe('Content Card', () => {
  it('should render the component', () => {
    const { container } = render(
      <ContentCard
        authorName="Author Name"
        authorCompany="Author Company"
        title="Title"
        description="Lorem ipsum dolor, sit"
        imageUrl="test_url"
        completed={30}
        watchedMinutes={20}
      />,
    )
    expect(container).toMatchSnapshot()
  })
})
