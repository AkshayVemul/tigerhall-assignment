import { gql } from '@apollo/client'

export const GET_PODCAST = gql`
  query GetProducts($keyword: String!) {
    contentCards(filter: { limit: 20, keywords: $keyword, types: [PODCAST] }) {
      edges {
        ... on Podcast {
          name

          image {
            ...Image
          }

          categories {
            ...Category
          }

          experts {
            ...Expert
          }
        }
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Category on Category {
    name
  }

  fragment Expert on Expert {
    firstName

    lastName

    title

    company
  }
`

export type PodcastType = {
  name: string
  image: {
    uri: string
    __typename: string
  }
  categories: {
    name: string
    __typename: string
  }[]
  experts: {
    firstName: string
    lastName: string
    title: string
    company: string
    __typename: string
  }[]
  __typename: string
}
export type GetPodcastVariablesType = {
  keyword: string
}
export type GetPodcastResponseType = {
  contentCards: {
    edges: PodcastType[]
  }
}
