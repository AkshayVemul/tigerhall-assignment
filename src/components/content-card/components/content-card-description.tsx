import { Box, Text } from '@chakra-ui/react'
export type ContentCardDescriptionProps = {
  title: string
  description: string
}
export const ContentCardDescription = ({
  title,
  description,
}: ContentCardDescriptionProps) => {
  return (
    <Box>
      <Text color={'grey.700'} fontSize={'xs'}>
        {title}
      </Text>
      <Text color={'black'} fontSize={'md'} fontWeight={'bold'}>
        {description}
      </Text>
    </Box>
  )
}
