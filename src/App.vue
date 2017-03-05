<template>
  <div id="app">
    <site-header></site-header>
    <div class="container my-3">
      <div class="row">
        <div class="col-md-6 offset-md-3">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SiteHeader from './components/SiteHeader.vue';

  export default {
    components: { SiteHeader },
    data() {
      return {}
    }
  }
</script>
