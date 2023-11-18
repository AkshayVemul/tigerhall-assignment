import { HStack, Input } from '@chakra-ui/react'
import { SearchIcon } from '@components/icons/search.icon'
import { useState } from 'react'

export type SearchInputProps = {
  onChange: (val: string) => void
}

export const SearchInput = ({ onChange }: SearchInputProps) => {
  const [value, setValue] = useState('')
  return (
    <HStack position={'relative'}>
      <Input
        px={2}
        py={3}
        paddingLeft={8}
        color={'white'}
        value={value}
        bg={'grey.900'}
        borderWidth={'1px'}
        border={'grey.700'}
        borderRadius={4}
        w={'full'}
        focusBorderColor={'tigerOrange.600'}
        onChange={(event) => {
          const currentValue = event.currentTarget.value
          setValue(currentValue)
          onChange(currentValue)
        }}
      />
      <HStack position={'absolute'} left={3} zIndex={'1'}>
        <SearchIcon color={'white'} />
      </HStack>
    </HStack>
  )
}
