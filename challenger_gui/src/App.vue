<template>
  <div>
    <navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import navbar from '@/components/navbarComp.vue';
import Footer from './components/FooterComp.vue';

export default {
  components: {
    navbar,
    Footer
  }
}
</script>

<style>

</style>
