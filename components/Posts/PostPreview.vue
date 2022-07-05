<template>
  <article class="post-preview">
    <v-btn
      class="post-like"
      fab
      light
      small
      @click="toggleLike"
      data-cy="post-like"
    >
      <v-icon v-if="isLiked" color="#E53935">
        mdi-heart
      </v-icon>
      <v-icon v-else>
        mdi-cards-heart-outline
      </v-icon>
    </v-btn>
    <nuxt-link :to="postLink">
      <div class="post-thumbnail"  data-cy="post-img">
        <img :src="require(`~/assets/images/${post.thumbnail}.jpg`)" :alt="post.title">
      </div>
      <div class="post-content">
        <h1 data-cy="post-title">{{ post.title }}</h1>
        <p data-cy="post-content">{{ post.previewText }}</p>
      </div>
    </nuxt-link>
  </article>

</template>

<script>
export default {
  name: "PostPreview",
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    },
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLiked: false
    }
  },
  created() {
    this.isLiked = this.post.like
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.post.id : '/posts/' + this.post.id
    }
  },
  methods: {
    async toggleLike() {
      const post = {
        ...this.post,
        like: !this.post.like
      }
      try{
        const newPost = await this.$axios.$put(`posts/${post.id}.json`, post)
        this.isLiked = newPost.like
        this.$store.commit('editPost', newPost)
      } catch(e){
        console.error(e)
      }


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
  position: relative;
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

.post-like {
  z-index: 1;
  position: absolute;
  top: 10px;
  right: 10px;
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
  min-height: 170px;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

.v-btn::before {
  background-color: #fff;
}
</style>
