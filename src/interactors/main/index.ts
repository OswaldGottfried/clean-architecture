import { HttpService } from '../../services/httpService'
import {
  createHttpInteractor,
  InteractorError,
} from '../../services/interactorFabrics'
import { createUserRequestSources } from './user/user'

const formatError = (error: Error): InteractorError => ({
  message: error.message,
  name: error.name,
  errors: [{ message: error.message }],
})

export const createMainApiInteractor = (httpService: HttpService) =>
  createHttpInteractor(
    {
      user: createUserRequestSources(httpService),
    },
    httpService,
    formatError,
  )
