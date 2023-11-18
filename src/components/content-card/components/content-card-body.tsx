import { Box, HStack, Image, Progress, Text } from '@chakra-ui/react'
import { PieIcon } from '@components/icons/pie.icon'
import { PodcastIcon } from '@components/icons/podcast.icon'
import { TimerIcon } from '@components/icons/timer.icon'

export type ContentCardBodyProps = {
  completed: number
  watchedMinutes: number
  imageUrl: string
}

export const ContentCardBody = ({
  imageUrl,
  completed,
  watchedMinutes,
}: ContentCardBodyProps) => {
  const parsedImage = new URL(imageUrl)
  const modifiedUrl = `${parsedImage.origin}/resize/250x/${parsedImage.pathname}`
  return (
    <Box position={'relative'}>
      <Image
        src={modifiedUrl}
        alt="podcast_image"
        loading="lazy"
        fallbackSrc="https://via.placeholder.com/244x120"
        height={'120px'}
        fit={'cover'}
        aspectRatio={2 / 1}
      />
      <HStack
        bg={'white'}
        alignItems={'center'}
        gap={1}
        p={2}
        position={'absolute'}
        top={'0'}
        left={'0'}
        borderBottomRightRadius={5}
      >
        <PieIcon color={'tigerOrange.400'} boxSize={3} />
        <Text color={'grey.900'} fontSize={'xs'} fontWeight={'bold'}>
          {completed}% Completed
        </Text>
      </HStack>

      <HStack
        position={'absolute'}
        justifyContent={'center'}
        alignItems={'center'}
        bottom={'2'}
        left={'2'}
        bg={'primary'}
        borderRadius={'full'}
        w={'6'}
        h={'6'}
      >
        <PodcastIcon color={'white'} boxSize={4} />
      </HStack>

      <HStack
        position={'absolute'}
        justifyContent={'center'}
        alignItems={'center'}
        px={'2'}
        py={'1'}
        bottom={'2'}
        right={'2'}
        bg={'blackAlpha.70%'}
        borderRadius={'full'}
      >
        <TimerIcon color={'white'} boxSize={3} />

        <Text color={'white'} fontSize={'xs'} fontWeight={'bold'}>
          {watchedMinutes}m
        </Text>
      </HStack>
      <Progress
        colorScheme="tigerOrange"
        h={'2px'}
        size="sm"
        value={completed}
      />
    </Box>
  )
}
