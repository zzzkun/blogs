import blog from '@/api/blog.js'
export default {
  data () {
    return {
      title : '', 
      content : '', 
      description : '',
       atIndex : false
    }
  },
 created() {
   this.blogId = this.$route.params.blogId
   console.log(this.blogId)
   blog.HTTPgetDetail({ blogId: this.blogId}).then(res => {
    console.log(res)
    this.title = res.data.title
    this.description = res.data.description
    this.createdAt = res.data.createdAt
    this.content = res.data.content
    console.log( this.description)
  })
},
methods: {
  onEdit(){
    blog.HTTPupdateBlog({  blogId: this.blogId }, { title: this.title, content: this.content, description: this.description, atIndex: this.atIndex}).then(res => {
      this.$router.push(`/detail/${res.data.id}`)
    
      
    })
  }
},
}