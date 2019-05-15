import request from '@/helpers/request'
// 博客相关

const URL = {
    GET_LIST: '/blog',
    GET_DETAIL: '/blog/:blogId',
    CREATE: '/blog',
    UPDATE: '/blog/:blogId',
    DELETE: '/blog/:blogId'
  }


  export default {
    HTTPgetBlogs({ page=1, userId, atIndex } = { page: 1 }) {
      return request(URL.GET_LIST, 'GET', { page, userId, atIndex })
    },
  
    HTTPgetIndexBlogs({ page=1 } = { page: 1}) {
      return this.HTTPgetBlogs({ page, atIndex: true })
    },
  
    HTTPgetBlogsByUserId(userId, { page=1, atIndex } = { page: 1}) {
      return this.HTTPgetBlogs({ userId, page, atIndex })
    },
  
    HTTPgetDetail({ blogId }) {
      return request(URL.GET_DETAIL.replace(':blogId', blogId))
    },
  
    HTTPupdateBlog({ blogId }, { title, content, description, atIndex }) {
      return request(URL.UPDATE.replace(':blogId', blogId), 'PATCH', { title, content, description, atIndex })
    },
  
    HTTPdeleteBlog({ blogId }) {
      return request(URL.DELETE.replace(':blogId', blogId), 'DELETE')
    },
  
    HTTPcreateBlog({ title = '', content = '', description = '', atIndex = false} = { title: '', content: '', description: '', atIndex: false}) {
      return request(URL.CREATE, 'POST', { title, content, description, atIndex })
    }
  
  }
