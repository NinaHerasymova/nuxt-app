<template>
  <div class="posts-page">
    <PostsList :posts="loadedPosts" :isAdmin="isAdmin"/>
  </div>
</template>

<script>

  export default {
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      }
    }
  }
</script>


<style scoped>
  .posts-page {
    display: flex;
    flex-direction: column;
  }

</style>
