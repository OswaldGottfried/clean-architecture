import axios from 'axios'

import { HttpService, HttpServiceConfig } from './types'

type CreateHttpServiceConfig = HttpServiceConfig

export const createHttpService = (
  config: CreateHttpServiceConfig = {},
): HttpService => axios.create(config)
