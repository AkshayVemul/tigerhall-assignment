import { Input } from '@chakra-ui/react'
import { useState } from 'react'

export type SearchInputProps = {
  onChange: (val: string) => void
}

export const SearchInput = ({ onChange }: SearchInputProps) => {
  const [value, setValue] = useState('')
  return (
    <Input
      color={'white'}
      value={value}
      onChange={(event) => {
        const currentValue = event.currentTarget.value
        setValue(currentValue)
        onChange(currentValue)
      }}
    />
  )
}
