import { request, authRequest, uploadFile } from '@/utils/request'

export function uploadImg(imgPath) {
  return uploadFile('images', {
    method: 'POST',
    name: 'image',
    formData: {
      type: 'qunImg'
    },
    filePath: imgPath
  })
}

export function createQun(data) {
  return authRequest('quns', {
    method: 'POST',
    data: data
  })
}

export function updateQun(id, data) {
  return authRequest('quns/' + id, {
    method: 'PATCH',
    data: data
  })
}

export function deleteQun(id, data) {
  return authRequest('quns/' + id, {
    method: 'DELETE',
    data: data
  })
}

export function getUserQuns(userId, data) {
  return request('users/' + userId + '/quns', {
    data: data
  })
}

export function getQun(id, data) {
  return request('quns/' + id, {
    data: data
  })
}
