import axiosClient from '@ajax/axiosClient'

export const loginService = (params: any) => axiosClient.post('auth/local', params)
