import { ComponentType } from 'react'
import { DefaultLoader } from './default-loader'

interface WithLoadingProps {
  isLoading: boolean
}

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
