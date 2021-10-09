import axiosClient from './axiosClient'

export const getDetailsBySlus = (slug: string) => {
  const url = `/blogs/${slug}/slug`

  return axiosClient.get(url)
}

export const voteStar = (slug: string, point: number) => {
  const url = `/blogs/${slug}/vote`

  return axiosClient.post(url, { point })
}
