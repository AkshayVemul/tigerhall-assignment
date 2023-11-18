import { useMemo } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Stack, VStack } from '@chakra-ui/react'
import { SearchInput } from '@components/search-input/search-input.component'
import {
  GET_PODCAST,
  GetPodcastResponseType,
  GetPodcastVariablesType,
} from '@graphql/getPodcast'
import { debounce } from '@utils/debounce'
import { PodcastList } from './components/podcast-list'

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
    <VStack p={4} gap={4} height={'full'}>
      <SearchInput onChange={handleOnchange} />
      <Stack
        gap={3}
        overflowY={'auto'}
        flexDirection={['column', 'row']}
        flexGrow={'1'}
        wrap={['nowrap', 'wrap']}
        px={2}
        pt={1}
      >
        <PodcastList
          podcastList={data?.contentCards?.edges}
          isLoading={loading}
        />
      </Stack>
    </VStack>
  )
}
