import { Skeleton, SkeletonText, Stack } from '@chakra-ui/react'

export const PodcastLoader = () => {
  return (
    <Stack gap={1} width={'244px'} borderRadius={2}>
      <Skeleton
        startColor="tigerOrange.600"
        endColor="tigerOrange.200"
        height="137px"
      />

      <SkeletonText
        startColor="tigerOrange.600"
        endColor="tigerOrange.200"
        width={'100px'}
        noOfLines={1}
        skeletonHeight="2"
      />
      <SkeletonText
        startColor="tigerOrange.600"
        endColor="tigerOrange.200"
        width={'50px'}
        noOfLines={1}
        skeletonHeight="2"
      />

      <Skeleton
        startColor="tigerOrange.600"
        endColor="tigerOrange.200"
        height="72px"
      />
      <Skeleton
        startColor="tigerOrange.600"
        endColor="tigerOrange.200"
        height="24px"
      />
    </Stack>
  )
}
