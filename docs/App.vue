<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/button">Button</router-link></li>
        <li><router-link to="/button">Button</router-link></li>
        <li><router-link to="/button">Button</router-link></li>
      </ul>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import "../src/styles/common/base.less";

#app {
  ul {
    display: flex;
    padding: 10px;
  }
  li {
    flex: 1;
  }
  a {
    text-decoration: none;
  }
}
</style>
