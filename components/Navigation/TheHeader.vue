<template>
<div class="header-container" data-app>
  <header class="the-header">
    <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
    <div class="logo">
      <nuxt-link to="/">WD BLOG</nuxt-link>
    </div>
    <div class="spacer"></div>
    <div class="navigation-items">
      <ul class="nav-list">
        <li class="nav-item"><nuxt-link to="/posts">Blog</nuxt-link></li>
        <li class="nav-item">
          <span v-if="!isAuth" @click="dialog = true">Admin Panel</span>
          <nuxt-link v-else to="/admin">Admin Panel</nuxt-link>
        </li>
        <li class="nav-item">
          <v-dialog
            v-model="dialog"
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="red lighten-2"
                dark
                v-bind="attrs"
                v-on="on"
              >
                {{isAuth ? "Logout" :  "Login"}}
              </v-btn>
            </template>

            <v-card>
              <template v-if="isAuth">
                <v-card-title class="text-h5 grey lighten-2">
                  LOGOUT
                </v-card-title>
                <v-card-text>
                Are you sure you want to logout?
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    color="primary"
                    text
                    @click="onLogout"
                  >
                   Logout
                  </v-btn>
                  <v-btn
                    color="error"
                    text
                    @click="dialog = false"
                  >
                    Cancel
                  </v-btn>
                </v-card-actions>
              </template>
              <template v-else>
                <AuthForm/>
              </template>
            </v-card>
          </v-dialog>
        </li>
      </ul>
    </div>
  </header>
</div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";
import AuthForm from "../Admin/AuthForm";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle,
    AuthForm
  },
  data () {
    return {
      dialog: false,
    }
  },
  computed: {
    isAuth(){
      return this.$store.getters.isAuth
    }
  },
  methods: {
    onLogout(){
      this.$store.dispatch('logout');
      this.$router.push('/')
      this.dialog = false
    }
  }
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: black;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.logo a {
  text-decoration: none;
  color: white;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a, .nav-item span {
  cursor: pointer;
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.nuxt-link-active {
  color: red;
}
</style>
