import { InteractorErrorItem } from './types'

export class InteractorError extends Error {
  errors: InteractorErrorItem[]

  constructor({ errors }: { errors: InteractorErrorItem[] }) {
    super(errors[0].message)

    this.errors = errors
  }
}
