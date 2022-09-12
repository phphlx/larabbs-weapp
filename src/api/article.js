import { request, authRequest, uploadFile } from '@/utils/request'

export function getArticles(data) {
  return request('articles/', {
    data: data
  })
}
