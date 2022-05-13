import { HttpService } from '../../../services/httpService'
import { uuidv4 } from '../../../packages/core/id'
import { User } from './dto'

export const createUserRequestSources = (httpService: HttpService) => {
  const ids = [uuidv4(), uuidv4()]

  return {
    getAll: (): Promise<string[]> => Promise.resolve(ids),
    get: (id: string): Promise<User> => {
      const user: Record<string, User> = {
        [ids[0]]: {
          id: ids[0],
          firstName: 'Boris',
          lastName: 'Jonson',
        },
        [ids[1]]: {
          id: ids[1],
          firstName: 'Horazio',
          lastName: 'Nelson',
        },
      }

      console.log({ id, user })

      return Promise.resolve(user[id])
    },
  }
}
