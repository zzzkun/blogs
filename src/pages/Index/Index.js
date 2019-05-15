
import blog from '@/api/blog.js'


export default {
  data () {
    return {
      blogs:[],
      page:1,
      total:0,
      currentPage4: 0
    }
  },
  created() {
   
    this.page = parseInt(this.$route.query.page) 
    blog.HTTPgetIndexBlogs({ page: this.page }).then((res)=>{
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
      this.currentPage4 = res.page
    console.log(res)
    })
  },
  methods: {
    handleCurrentChange(newPage){
      blog.HTTPgetIndexBlogs({page:newPage}).then((res)=>{
        this.blogs = res.data
        this.total = res.total
        this.page = res.page

      this.$router.push({ path: '/', query: { page: newPage}})
      })
    }
  }
}