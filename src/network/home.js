import {request} from './request';

// 封装首页的请求
export function getHomeMultidata(){
  return request({
    url: '/home/multidata'
  })
}