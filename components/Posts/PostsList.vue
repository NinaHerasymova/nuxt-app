<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :is-admin="isAdmin"
      :id="post.id"
      :title="post.title"
      :previewText="post.previewText"
      :thumbnail="post.thumbnail"
    />
<!--    <PostPreview-->
<!--      :is-admin="isAdmin"-->
<!--      id="2"-->
<!--      title="Hello, Richard))"-->
<!--      previewText="preview Richard"-->
<!--      thumbnail="corgi_1"-->
<!--    />-->
  </section>
</template>

<script>
  import PostPreview from "./PostPreview";
  export default {
    name: "PostList",
    components: {PostPreview},
    props:{
      isAdmin:{
        type: Boolean,
        required: true,
        default: false
      },
      posts: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
