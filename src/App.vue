<template>
  <navbar></navbar>

  <router-view></router-view>
</template>

<script>
import Navbar from './components/Navbar.vue';
import PageViewer from './components/PageViewer.vue';
import CreatePage from './components/CreatePage.vue';


export default {
  components: {
      Navbar,
      PageViewer,
      CreatePage,
  },

  methods: {
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    }
  },
}

</script>