<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
    <Ad/><a href="https://stock.blogmura.com/ranking/in?p_cid=11016741" target="_blank" ><img src="https://b.blogmura.com/stock/88_31.gif" width="88" height="31" border="0" alt="にほんブログ村 株ブログへ" /></a><br /><a href="https://stock.blogmura.com/ranking/in?p_cid=11016741">にほんブログ村</a>
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import Ad from '@theme/components/Ad.vue'
export default {
  components: { PageEdit, PageNav,Ad },
  props: ['sidebarItems']
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
