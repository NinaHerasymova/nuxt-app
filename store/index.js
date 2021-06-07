export const state = () => {
  return {
    loadedPosts: []
  }
}
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  addPost(state, post){
    state.loadedPosts.push(post)
  },
  editPost(state, editedPost){
    const postIndex = state.loadedPosts.findIndex(post=>post.id===editedPost.id);
    state.loadedPosts[postIndex] = editedPost
  }

}

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return context.app.$axios.$get(`posts.json`)
    .then(data=>{
      console.log(data)
      const postsArray = []
      for(const key in data){
        postsArray.push({...data[key], id:key})
      }
      vuexContext.commit('setPosts', postsArray)
    })
    .catch(e=>context.error(e))
  },
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  },
  addPost(vuexContext, post){
    const createdPost = {
      ...post,
      updatedDate: new Date()
    }
   return context.app.$axios
    .$post(`posts.json`, createdPost
    )
    .then(data=>{
      vuexContext.commit('addPost', {...createdPost, id: data.name})
    })
    .catch(e=>console.log(e))
  },
  editPost(vuexContext, post){
    const editedPost = {
      ...post,
      updatedDate: new Date()
    }
    return context.app.$axios.$put(`posts/${post.id}.json`, editedPost)
    .then(data=>{
      vuexContext.commit('editPost', editedPost)
    })
    .catch((e)=>console.log('error', e))
  }
}

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}
