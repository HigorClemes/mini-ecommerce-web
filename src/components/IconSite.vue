<template>
    <svg :xmlns="iconDir" :width="width" :height="height" viewBox="0 0 18 18" :aria-labelledby="iconName" role="presentation" class="icone">
      <title :id="iconName" lang="en">{{ iconName }} icon</title>
      <g :fill="iconColor">
        <slot />
      </g>
    </svg>
  </template>
  
  <script>
  export default {
    props: {
      iconDir:  { type: String },
      iconName: { type: String, default: 'box' },
      width: { type: [Number, String], default: 18 },
      height: { type: [Number, String], default: 18 },
      iconColor: { type: String, default: 'currentColor' }
    },
  }
  </script>

  <style lang="scss">
      .icone {
        border-radius: 27px;
        margin-top: 28px;
        margin-right: 28px;
        margin-bottom: 28px;
        // margin-left: 160px;
        width: 40px; 
        height: 40px;
        text-align: center;
      }
  </style>