import { HStack } from '@chakra-ui/react'
import { BookMarkIcon } from '@components/icons/bookmark.icon'
import { ShareIcon } from '@components/icons/share.icon'

export const ContentCardFooter = () => {
  return (
    <HStack
      alignItems={'center'}
      justifyContent={'flex-end'}
      gap={3}
      w={'full'}
    >
      <a href="#">
        <ShareIcon color={'primary'} />
      </a>
      <a href="#">
        <BookMarkIcon color={'primary'} />
      </a>
    </HStack>
  )
}
