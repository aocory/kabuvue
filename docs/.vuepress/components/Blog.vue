<template>
<main class="grid">
  <article v-for="post in posts">
    <a :href="post.path">
    <img :src="post.frontmatter.image" :alt="post.title">
    </a>
    <div class="text">
        <h3>{{post.title}}</h3>
    <a :href="post.path" class='btn blue'>More</a>
    </div>
  </article>
</main>
</template>

<script>
    export default {
        computed: {
            posts() {
                return this.$site.pages
                    .filter(page => page.frontmatter.type === 'blog')
                    .sort(function(a, b) {
                        if (a.path > b.path) {
                            return -1;
                            } else {
                                return 1;
                            }
                    });
            }
        }
    }
</script>
<style>
.grid { 
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  align-items: stretch;
  }
.grid > article {
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
}
.grid > article img {
  max-width: 100%;
}
.text {
  padding: 0 20px 20px;
}
.text > button {
  background: gray;
  border: 0;
  color: white;
  padding: 10px;
  width: 100%;
  }
</style>