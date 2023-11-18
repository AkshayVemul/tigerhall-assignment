import { ContentCard } from '@components/content-card/content-card.component'
import { PodcastType } from '@graphql/getPodcast'
import { withLoading } from '@hoc/withLoading'
import { PodcastLoader } from './podcast-loader'
import { VStack } from '@chakra-ui/react'

type PodcastListProps = {
  podcastList: PodcastType[] | undefined
}

export const PodcastListComponent = ({ podcastList }: PodcastListProps) => {
  return podcastList?.map((podcast) => {
    return (
      <VStack flexShrink={0} key={podcast.name}>
        <ContentCard
          authorName={podcast.experts?.[0].firstName}
          authorCompany={podcast.experts?.[0].lastName}
          title={podcast.name}
          description="Peak Performance: Going From Good to Great with Simon Taudel"
          imageUrl={podcast.image.uri}
          completed={30}
          watchedMinutes={20}
        />
      </VStack>
    )
  })
}

export const PodcastList = withLoading<PodcastListProps>(
  PodcastListComponent,
  PodcastLoader,
)
