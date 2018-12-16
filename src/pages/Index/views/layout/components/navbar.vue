<style scoped>
  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
  .menu-icon {
    transition: all 0.3s;
  }
  .rotate-icon {
    transform: rotate(-90deg);
  }
</style>

<template>
    <Header :style="{padding: 0}" class="layout-header-bar">
      <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu" size="24"></Icon>
    </Header>
</template>

<script>
  export default {
    computed: {
      rotateIcon() {
        return [
          'menu-icon',
          this.$store.state.siderbar ? 'rotate-icon' : ''
        ];
      }
    },
    methods: {
      collapsedSider() {
        this.$store.commit('SIDEBAR', !this.$store.state.sidebar);
      }
    }
  }
</script>

