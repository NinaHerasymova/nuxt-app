import axios from 'axios'

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
    return axios.get('https://nuxt-app-b50bf-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
    .then(res=>{
      console.log(res.data)
      const postsArray = []
      for(const key in res.data){
        postsArray.push({...res.data[key], id:key})
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
   return axios
    .post('https://nuxt-app-b50bf-default-rtdb.europe-west1.firebasedatabase.app/posts.json', createdPost
    )
    .then(res=>{
      vuexContext.commit('addPost', {...createdPost, id: res.data.name})
    })
    .catch(e=>console.log(e))
  },
  editPost(vuexContext, post){
    const editedPost = {
      ...post,
      updatedDate: new Date()
    }
    return axios.put(`https://nuxt-app-b50bf-default-rtdb.europe-west1.firebasedatabase.app/posts/${post.id}.json`, editedPost)
    .then(res=>{
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
