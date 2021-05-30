<template>
  <div class="posts-page">
    <PostsList :posts="loadedPosts" :isAdmin="isAdmin"/>
  </div>
</template>

<script>

  import PostsList from "~/components/Posts/PostsList";

  export default {
    name: "index",
    components: {PostsList},
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
