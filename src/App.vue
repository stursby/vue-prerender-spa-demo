<template>
  <div id="app">
    <h1 @click="$router.push('/')">Vue Prerender SPA Demo</h1>
    <router-view></router-view>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

h1 {
  cursor: pointer;
}

body {
  padding: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
</style>
