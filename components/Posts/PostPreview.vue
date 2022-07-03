<template>
  <article class="post-preview">
    <v-btn
      :class="['post-like', isLiked && 'post-like--liked']"
      fab
      light
      small
      @click="toggleLike"
    >
      <v-icon v-if="isLiked" color="#E53935">
        mdi-heart
      </v-icon>
      <v-icon v-else>
        mdi-cards-heart-outline
      </v-icon>
    </v-btn>
    <nuxt-link :to="postLink">
      <div class="post-thumbnail">
        <img :src="require(`~/assets/images/${post.thumbnail}.jpg`)" :alt="post.title">
      </div>
      <div class="post-content">
        <h1>{{ post.title }}</h1>
        <p>{{ post.previewText }}</p>
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
  data(){
    return {
      isLiked: false
    }
  },
  created(){
    this.isLiked = this.post.like
  },
  computed: {
    postLink() {
      return this.isAdmin ? '/admin/' + this.post.id : '/posts/' + this.post.id
    }
  },
  methods: {
    toggleLike() {
      this.isLiked = !this.isLiked
      const post = {
        ...this.post,
        like: this.isLiked
      }
      console.log(this.post)
      this.$store.dispatch('editPost', post)
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
