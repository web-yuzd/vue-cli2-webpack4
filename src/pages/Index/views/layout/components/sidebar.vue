<style>
  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  .menu-item i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
  .collapsed-menu span {
    width: 0px;
    transition: width 0.2s ease;
  }
  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>

<template>
  <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
    <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
      <MenuItem name="1-1">
        <Icon type="ios-navigate"></Icon>
        <span>Option 1</span>
      </MenuItem>
      <MenuItem name="1-2">
        <Icon type="ios-search"></Icon>
        <span>Option 2</span>
      </MenuItem>
      <MenuItem name="1-3">
        <Icon type="ios-settings"></Icon>
        <span>Option 3</span>
      </MenuItem>
    </Menu>
  </Sider>
</template>

<script>
  export default {
    computed: {
      isCollapsed() {
        return this.$store.state.sidebar;
      },
      menuitemClasses() {
        return [
          'menu-item',
          this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    }
  }
</script>

