<template>
  <div class="wrapper">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  };
</script>

<style>
  .wrapper {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
  }
</style>

