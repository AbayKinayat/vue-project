<template>
  <div class="app-main-layout">
    <main 
      :class="{full: !isOpen}"
    class="app-content">
      <div class="app-page">
        <router-view />
      </div>
    </main>

    <NavBar @nav-click="isOpen = !isOpen"/>
    <SideBar v-model="isOpen"/>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/app/NavBar"
import SideBar from "@/components/app/SideBar"
export default {
  data: () => ({
    isOpen: true,
  }),
  name: 'main-layout',
  mounted() {

  },
  components: {
    NavBar, SideBar
  }
}
</script>