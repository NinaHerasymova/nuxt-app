<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="post" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
  import AdminPostForm from "~/components/Admin/AdminPostForm";
  import axios from "axios";

  export default {
    name: "index",
    components: {AdminPostForm},
    layout: 'admin',
    asyncData(context) {
      return axios.get(`https://nuxt-app-b50bf-default-rtdb.europe-west1.firebasedatabase.app/posts/${context.params.postId}.json`)
      .then((res) => {
        return {
          post: {...res.data, id:context.params.postId}
        }
      })
      .catch(e => context.error(e))
    },
    methods: {
      onSubmitted(editedPost) {
        this.$store.dispatch('editPost', editedPost)
        .then(()=>this.$router.push('/admin'))

      }
    }
  }
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
