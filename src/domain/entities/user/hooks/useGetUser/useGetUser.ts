import { useQuery } from '../../../../../packages'
import { mainApi } from '../../../../../interactors'
import { User } from '../../'

export const useGetUser = (userId?: string): User | null => {
  if (!userId) throw Error('user is not found')
  const { data } = useQuery('getUser', () => mainApi.user.get(userId), {})
  return data ?? null
}
