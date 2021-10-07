import axiosClient from '@api/axiosClient'

export const loginService = (params: any) => axiosClient.post('auth/local', params)
