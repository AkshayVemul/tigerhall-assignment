import { Box, VStack } from '@chakra-ui/react'

import {
  ContentCardDescription,
  ContentCardDescriptionProps,
} from './components/content-card-description'
import {
  ContentCardAuthor,
  ContentCardAuthorProps,
} from './components/content-card-author'
import { ContentCardFooter } from './components/content-card-footer'
import {
  ContentCardBody,
  ContentCardBodyProps,
} from './components/content-card-body'

export type ContentCardProps = ContentCardBodyProps &
  ContentCardDescriptionProps &
  ContentCardAuthorProps

export const ContentCard = ({
  title,
  description,
  authorName,
  authorCompany,
  imageUrl,
  completed,
  watchedMinutes,
}: ContentCardProps) => {
  return (
    <Box bg={'white'} width={'244px'} borderRadius={'8'} overflow={'hidden'}>
      <ContentCardBody
        imageUrl={imageUrl}
        completed={completed}
        watchedMinutes={watchedMinutes}
      />

      <VStack p={2} pb={3} gap={2} alignItems={'flex-start'}>
        <ContentCardDescription title={title} description={description} />
        <ContentCardAuthor
          authorName={authorName}
          authorCompany={authorCompany}
        />
        <ContentCardFooter />
      </VStack>
    </Box>
  )
}
