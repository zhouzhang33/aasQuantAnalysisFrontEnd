import request from '@/plugin/axios'

export function datatable () {
  return request({
    url: '/datatable/data',
    method: 'post'
  })
}