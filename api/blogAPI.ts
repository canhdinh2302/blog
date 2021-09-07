import axiosClient from './axiosClient'

export const getDetailsBySlus = (slug: string) => {
  const url = `/blogs/${slug}/slug`

  return axiosClient.get(url)
}
