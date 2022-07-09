<template>
  <div class="admin-auth-page">
    <AuthForm/>
  </div>
</template>

<script>

  export default {
    name: 'AdminAuthPage',
    layout: 'admin',
  }
</script>

<style scoped>
  .admin-auth-page {
    padding: 20px;
  }

  .auth-container {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 2px #ccc;
    width: 300px;
    margin: auto;
    padding: 10px;
    box-sizing: border-box;
  }
</style>

