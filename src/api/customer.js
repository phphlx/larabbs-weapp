import { request } from '@/utils/request'

export function getCustomerConfig(id, data) {
  return request('configs/' + id, {
    data: data
  })
}
