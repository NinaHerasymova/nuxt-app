<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{loadedPost.title}}</h1>
      <div class="post-details">
        <div class="post-detail">
          Updated at
          {{loadedPost.updatedDate | date}}
        </div>
        <div class="post-detail">
          Author:
          {{loadedPost.author}}
        </div>

      </div>
      <div class="post-thumbnail">
        <img :src="require(`~/assets/images/${loadedPost.thumbnail}.jpg`)" :alt="title">
      </div>
      <div class="post-content">
        <p>{{loadedPost.content}}</p>
      </div>
    </section>
    <div class="post-feedback">
      Lorem ipsum dolor sit amet, consectetur <a href="mailto:gghgj@trebf.hh">hkjhl</a>.
    </div>
  </div>
</template>

<script>
  export default {
    name: "index",
    asyncData(context) {
      return context.app.$axios.$get(`posts/${context.params.id}.json`)
      .then((data) => {
        return {
          loadedPost: data
        }
      })
      .catch(e => context.error(e))
    }
  }
</script>

<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  .post {
    width: 100%;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 3px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-thumbnail img{
    width: 100%;
  }

  .post-feedback a {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
