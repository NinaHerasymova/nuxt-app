<template>
  <div class="home-page">
    <section class="intro">
      <h1 data-cy="title">Cypress test project</h1>
      <div class="notification" v-show="showBanner" data-cy="banner">
        <span>Annoying Notification</span>
        <span class="notification-close" @click="showBanner = false">X</span>
        <span>{{ timeNow }}</span>
      </div>
    </section>
    <PostsList :posts="loadedPosts" :isAdmin="false"/>
  </div>
</template>

<script>

  import PostsList from "../components/Posts/PostsList";

  export default {
    name: "index",
    components: {PostsList},
    data(){
      return {
        showBanner: true
      }
    },
    mounted(){
      setTimeout(()=>this.showBanner = false, 30000)
    },
    computed: {
      loadedPosts() {
        return this.$store.getters.loadedPosts
      },
      timeNow(){
        return Date.now()
      }
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

  .notification {
    z-index: 2;
    width: 300px;
    height: 300px;
    position: absolute;
    bottom: -50%;
    padding: 20px;
    border-radius: 20px;
    background-color: #00ff96;
    box-shadow: 0 2px 15px #ccc;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 24px;
  }
  .notification-close {
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
  }

</style>
