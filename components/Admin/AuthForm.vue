<template>
  <v-form
    @submit.prevent="onSubmit"
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
      v-model="password"
      label="Password"
      required
      type="password"
    ></v-text-field>
    <v-btn
      color="primary"
      text
      type="submit">
      {{ isLogin ? 'Login' : 'Sign Up' }}

    </v-btn>
    <v-btn
      color="primary"
      text
      @click="isLogin = !isLogin">
      Switch to {{ isLogin ? 'Signup' : 'Login' }}
    </v-btn>
  </v-form>
</template>

<script>

export default {
  name: 'AuthForm',
  data() {
    return {
      isLogin: true,
      email: '',
      password: ''
    }
  },
  methods:{
    onSubmit() {
      this.$store.dispatch('authenticateUser', {
        isLogin: this.isLogin,
        email: this.email,
        password: this.password
      })
        .then(()=>this.$router.push('/admin'))
    }
  }
}
</script>

<style scoped>
 .v-form {
    padding: 16px
  }
</style>
