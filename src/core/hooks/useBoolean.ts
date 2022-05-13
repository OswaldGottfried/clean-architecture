import { useCallback, useState } from 'react'

type SetTrue = () => void
type SetFalse = () => void
type Toggle = () => void
type SetValue = (value: boolean) => void

type UseBoolean = [boolean, SetTrue, SetFalse, Toggle, SetValue]

export const useBoolean = (initialValue: boolean): UseBoolean => {
  const [value, setValue] = useState(initialValue)

  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])
  const toggle = useCallback(() => setValue((prevValue) => !prevValue), [])

  return [value, setTrue, setFalse, toggle, setValue]
}
