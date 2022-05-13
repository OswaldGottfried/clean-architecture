import { useQuery } from 'react-query'
import { mainApi } from '../../../../../interactors/api'
import { Users } from '../../type'

export const useGetUsers = (): Users => {
  const { data } = useQuery('getUsers', () => mainApi.user.getAll())
  return data || []
}
