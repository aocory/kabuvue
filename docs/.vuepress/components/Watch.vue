<template>
<div>
        <button v-if='read==-1' @click="addarticle" class="btn-status0">😃ミタヨ</button>
        <button v-else @click="removearticle" class="btn-status1">😉Thanks!!</button>
        </div>
</template>
<script>
export default {
    props:['articleName'],
    data:function(){
      return {
        articles:[],
        read: -1,
        strage:'watch'
        }
    },
  mounted() {
   if (localStorage.getItem(this.strage)) {
      try {
      this.articles = JSON.parse(localStorage.getItem(this.strage))
      return this.read=this.articles.indexOf(this.articleName)
      } catch(e) {
      localStorage.removeItem(this.strage)
      }
     }
  },
    methods: {
    addarticle() {
                this.articles.push(this.articleName);
                this.savearticles()
                return this.read=this.articles.indexOf(this.articleName)
    },
       removearticle() {
                const num=this.articles.indexOf(this.articleName)
                this.articles.splice(num, 1);
                this.savearticles();
                return this.read=this.articles.indexOf(this.articleName)
            },
            savearticles() {
                const parsed = JSON.stringify(this.articles);
                localStorage.setItem(this.strage, parsed);
            }
    }
}
</script>