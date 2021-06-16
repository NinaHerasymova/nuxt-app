<template>
  <div class="admin-post-page">
    <section class="new-post-form">
     <AdminPostForm @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
  import AdminPostForm from "~/components/Admin/AdminPostForm";

  export default {
    name: "index",
    components: {AdminPostForm},
    layout: 'admin',
    middleware: ['check-auth', 'auth'],
    methods:{
      onSubmitted(postData){
        this.$store.dispatch('addPost', postData)
        .then(()=>this.$router.push('/admin'))
      }
    }
  }
</script>

<style scoped>
  .new-post-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .new-post-form {
      width: 500px;
    }
  }
</style>
