import { Heading } from '@chakra-ui/react'
import { ComponentType } from 'react'

interface WithLoadingProps {
  isLoading: boolean
}

const DefaultLoader = () => <Heading>Loading....</Heading>

export function withLoading<WrappedComponentProps>(
  WrappedComponent: ComponentType<WrappedComponentProps>,
  LoaderComponent: ComponentType = DefaultLoader,
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component'

  const ComponentWithLoading = ({
    isLoading,
    ...rest
  }: WrappedComponentProps & WithLoadingProps) => {
    if (isLoading) {
      return <LoaderComponent />
    }

    return (
      <WrappedComponent
        {...(rest as WrappedComponentProps & JSX.IntrinsicAttributes)}
      />
    )
  }

  ComponentWithLoading.displayName = `withLoading(${displayName})`

  return ComponentWithLoading
}
