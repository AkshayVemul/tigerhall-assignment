import { Box, Text } from '@chakra-ui/react'

export type ContentCardAuthorProps = {
  authorName: string
  authorCompany: string
}

export const ContentCardAuthor = ({
  authorName,
  authorCompany,
}: ContentCardAuthorProps) => {
  return (
    <Box>
      <Text color={'grey.800'} fontSize={'xs'}>
        {authorName}
      </Text>
      <Text color={'grey.800'} fontSize={'xs'} fontWeight={'bold'}>
        {authorCompany}
      </Text>
    </Box>
  )
}
