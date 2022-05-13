import { createHttpService } from '../services/httpService'
import { createMainApiInteractor } from './main'

export const mainApiHttpService = createHttpService({
  baseURL: '/api',
})

export const mainApi = createMainApiInteractor(mainApiHttpService)
