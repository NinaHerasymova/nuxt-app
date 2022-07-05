<template>
  <div class="home-page">
    <section class="intro">
      <h1 data-cy="title">Cypress test project</h1>
    </section>
    <PostsList :posts="loadedPosts" :isAdmin="false"/>
  </div>
</template>

<script>

  import PostsList from "../components/Posts/PostsList";

  export default {
    name: "index",
    components: {PostsList},
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      },
    }
  }
</script>

<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-image: url('~assets/images/background.jpeg');
    background-position: bottom;
    background-size: cover;
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 3rem;
    color: white;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }

  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }


</style>
