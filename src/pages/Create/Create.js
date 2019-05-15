import blog from '@/api/blog'


export default {
  data () {
    return {
      title: '',
      description: '',
      content: '',
      atIndex:false
    }
  },
  methods: {
    onCreate(){
      blog.HTTPcreateBlog({title : this.title, content : this.content, description : this.description, atIndex : this.atIndex})
      .then((res)=>{
        console.log(res)
        this.$message.success(res.msg)
       this.$router.push({path:`/detail/${res.data.id}`})
      })
    }
  },
}