<template>
    <div class="banner">
      <img v-bind:src="imageSource" alt="Banner image" />
    </div>
  </template>
  
  <script>
  export default {
    props: ['imageSource']
  }
  </script>
  
  <style scoped>
  .banner {
    width: 100%;
    height: auto;
  }

  img {
      width: 100%;
      height: auto;
    }

  </style>