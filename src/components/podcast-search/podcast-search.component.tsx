import { useMemo } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { ContentCard } from '@components/content-card/content-card.component'
import { SearchInput } from '@components/search-input/search-input.component'
import {
  GET_PODCAST,
  GetPodcastResponseType,
  GetPodcastVariablesType,
} from '@graphql/getPodcast'
import { debounce } from '@utils/debounce'

export const PodcastSearch = () => {
  const [getProducts, { data, loading }] = useLazyQuery<
    GetPodcastResponseType,
    GetPodcastVariablesType
  >(GET_PODCAST)

  const handleOnchange = useMemo(
    () =>
      debounce((value: string) => {
        getProducts({ variables: { keyword: value } })
      }, 300),
    [getProducts],
  )

  return (
    <Box width={'320px'} p={4}>
      <SearchInput onChange={handleOnchange} />
      {!loading &&
        data?.contentCards?.edges?.map((podcast) => {
          return (
            <ContentCard
              key={podcast.name}
              authorName={podcast.experts?.[0].firstName}
              authorCompany={podcast.experts?.[0].lastName}
              title={podcast.name}
              description="Peak Performance: Going From Good to Great with Simon Taudel"
              imageUrl="https://bit.ly/naruto-sage"
              completed={30}
              watchedMinutes={20}
            />
          )
        })}
    </Box>
  )
}
