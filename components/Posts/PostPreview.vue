<template>
  <nuxt-link :to="postLink" class="post-preview">
    <article>
      <div class="post-thumbnail">
        <img :src="require(`~/assets/images/${thumbnail}.jpg`)" :alt="title">
      </div>
      <div class="post-content">
        <h1>{{title}}</h1>
        <p>{{previewText}}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
  export default {
    name: "PostPreview",
    props: {
      isAdmin:{
        type: Boolean,
        required: true,
        default:false
      },
      id: {
        type: String,
        required: true
      },
      title: {
        type: String,
        required: true
      },
      previewText: {
        type: String,
        required: true
      },
      thumbnail: {
        type: String,
        required: true
      }
    },
    computed:{
      postLink(){
        return this.isAdmin ? '/admin/'+this.id : '/posts/'+this.id
      }
    }
  }
</script>

<style scoped>
  .post-preview {
    border: 1px solid #ccc;
    box-shadow: 0 2px 2px #ccc;
    background-color: white;
    width: 90%;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 850px) {
    .post-preview {
      width: 400px;
      margin: 10px;
    }
  }

  .post-thumbnail {
    width: 100%;
    height: 200px;
    background-position: center;
    background-size: cover;
  }

  .post-thumbnail img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }

  .post-content {
    padding: 10px;
    text-align: center;
  }

  a:hover .post-content,
  a:active .post-content {
    background-color: #ccc;
  }
</style>
