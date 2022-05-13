import {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

export type HttpServiceResponse<Data = unknown> = AxiosResponse<Data>

export type HttpServiceRequestConfig = AxiosRequestConfig

export type HttpService = AxiosInstance

export type HttpServiceConfig = AxiosRequestConfig

export type HttpServiceError<ErrorRes> = AxiosError<ErrorRes>
