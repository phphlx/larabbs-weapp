import { request, authRequest, uploadFile } from '@/utils/request'

export function uploadImg(imgPath) {
  return uploadFile('images', {
    method: 'POST',
    name: 'image',
    formData: {
      type: 'videoImg'
    },
    filePath: imgPath
  })
}

export function uploadVideo(videoPath) {
  return uploadFile('video/upload', {
    method: 'POST',
    name: 'video',
    formData: {
      type: 'video'
    },
    filePath: videoPath
  })
}

export function createVideo(data) {
  return authRequest('videos', {
    method: 'POST',
    data: data
  })
}

export function updateVideo(id, data) {
  return authRequest('videos/' + id, {
    method: 'PATCH',
    data: data
  })
}

export function deleteVideo(id, data) {
  return authRequest('videos/' + id, {
    method: 'DELETE',
    data: data
  })
}

export function getUserVideos(userId, data) {
  return request('users/' + userId + '/videos', {
    data: data
  })
}

export function getVideo(id, data) {
  return request('videos/' + id, {
    data: data
  })
}
