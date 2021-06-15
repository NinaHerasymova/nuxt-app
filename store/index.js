export const state = () => {
  return {
    loadedPosts: [],
    token: null
  }
}
export const mutations = {
  setPosts(state, posts) {
    state.loadedPosts = posts
  },
  addPost(state, post) {
    state.loadedPosts.push(post)
  },
  editPost(state, editedPost) {
    const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
    state.loadedPosts[postIndex] = editedPost
  },
  setToken(state, token) {
    state.token = token
  }
}

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return this.$axios.$get(`posts.json`)
    .then(data => {
      const postsArray = []
      for (const key in data) {
        postsArray.push({...data[key], id: key})
      }
      vuexContext.commit('setPosts', postsArray)
    })
    .catch(e => context.error(e))
  },
  setPosts(vuexContext, posts) {
    vuexContext.commit('setPosts', posts)
  },
  addPost(vuexContext, post) {
    const createdPost = {
      ...post,
      updatedDate: new Date()
    }
    return this.$axios
    .$post(`posts.json?auth=${vuexContext.state.token}`, createdPost
    )
    .then(data => {
      vuexContext.commit('addPost', {...createdPost, id: data.name})
    })
    .catch(e => console.log(e))
  },
  editPost(vuexContext, post) {
    const editedPost = {
      ...post,
      updatedDate: new Date()
    }

    return this.$axios.$put(`posts/${editedPost.id}.json?auth=${vuexContext.state.token}`, editedPost)
    .then(data => {
      vuexContext.commit('editPost', editedPost)
    })
    .catch((e) => console.log('error', e))
  },
  authenticateUser(vuexContext, authData) {
    let authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.apiKey
    if (!authData.isLogin) {
      authUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + process.env.apiKey
    }
    return this.$axios
    .$post(authUrl, {
      email: authData.email,
      password: authData.password,
      returnSecureToken: true
    })
    .then(res => {
      vuexContext.commit('setToken', res.idToken)
    })
    .catch(e => console.log(e))
  }
}

export const getters = {
  loadedPosts(state) {
    return state.loadedPosts
  }
}
