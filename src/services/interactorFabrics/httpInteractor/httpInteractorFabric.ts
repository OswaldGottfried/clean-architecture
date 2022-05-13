import { HttpService, HttpServiceError } from '../../httpService'
import { InteractorError } from '../errors'

export const createHttpInteractor = <
  Interactor extends {},
  ErrorResponse extends Record<string, unknown>,
>(
  values: Interactor,
  httpService: HttpService,
  formatError: (error: HttpServiceError<ErrorResponse>) => InteractorError,
): Interactor => {
  httpService.interceptors.response.use(
    (res) => res,
    (err) => Promise.reject(formatError(err)),
  )

  return values
}
